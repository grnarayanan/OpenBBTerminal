"""Covid View"""
__docformat__ = "numpy"

import logging
import os
from typing import List, Optional

import matplotlib.pyplot as plt
import pandas as pd

from openbb_terminal.alternative.covid import covid_model
from openbb_terminal.config_plot import PLOT_DPI
from openbb_terminal.config_terminal import theme
from openbb_terminal.decorators import log_start_end
from openbb_terminal.helper_funcs import (
    export_data,
    is_valid_axes_count,
    plot_autoscale,
    print_rich_table,
)
from openbb_terminal.plots_core.plotly_helper import OpenBBFigure
from openbb_terminal.rich_config import console

logger = logging.getLogger(__name__)


@log_start_end(log=logger)
def plot_covid_ov(
    country: str,
    external_axes: bool = False,
) -> None:
    """Plots historical cases and deaths by country.

    Parameters
    ----------
    country: str
        Country to plot
    external_axis: Optional[List[plt.Axes]]
        List of external axes to include in plot
    """
    cases = covid_model.get_global_cases(country) / 1_000
    deaths = covid_model.get_global_deaths(country)
    if cases.empty or deaths.empty:
        return
    ov = pd.concat([cases, deaths], axis=1)
    ov.columns = ["Cases", "Deaths"]

    fig = OpenBBFigure.create_subplots(
        specs=[[{"secondary_y": True}]],
    )

    fig.add_scatter(
        x=cases.index,
        y=cases[country].values,
        name="Cases",
        opacity=0.2,
        line_color=theme.up_color,
        showlegend=False,
        secondary_y=False,
    )
    fig.add_scatter(
        x=cases.index,
        y=cases[country].rolling(7).mean().values,
        name="Cases (7d avg)",
        line_color=theme.up_color,
        hovertemplate="%{y:.2f}",
        secondary_y=False,
    )
    fig.add_scatter(
        x=deaths.index,
        y=deaths[country].values,
        name="Deaths",
        opacity=0.2,
        yaxis="y2",
        line_color=theme.down_color,
        showlegend=False,
        secondary_y=True,
    )
    fig.add_scatter(
        x=deaths.index,
        y=deaths[country].rolling(7).mean().values,
        name="Deaths (7d avg)",
        yaxis="y2",
        line_color=theme.down_color,
        hovertemplate="%{y:.2f}",
        secondary_y=True,
    )
    fig.update_layout(
        margin=dict(l=70, t=40, b=0),
        title=f"Overview for {country.upper()}",
        xaxis_title="Date",
        yaxis=dict(
            title="Cases [1k]",
            side="left",
        ),
        yaxis2=dict(
            title="Deaths",
            side="right",
            overlaying="y",
            showgrid=False,
        ),
        hovermode="x unified",
    )

    return fig.show() if not external_axes else fig


def plot_covid_stat(
    country: str,
    stat: str = "cases",
    external_axes: Optional[List[plt.Axes]] = None,
) -> None:
    """Plots historical stat by country.

    Parameters
    ----------
    country: str
        Country to plot
    external_axis: Optional[List[plt.Axes]]
        List of external axes to include in plot
    """
    # This plot has 1 axis
    if external_axes is None:
        _, ax = plt.subplots(figsize=plot_autoscale(), dpi=PLOT_DPI)
    elif is_valid_axes_count(external_axes, 1):
        (ax,) = external_axes
    else:
        return

    if stat == "cases":
        data = covid_model.get_global_cases(country) / 1_000
        ax.set_ylabel(stat.title() + " [1k]")
        color = theme.up_color
    elif stat == "deaths":
        data = covid_model.get_global_deaths(country)
        ax.set_ylabel(stat.title())
        color = theme.down_color
    elif stat == "rates":
        cases = covid_model.get_global_cases(country)
        deaths = covid_model.get_global_deaths(country)
        data = (deaths / cases).fillna(0) * 100
        ax.set_ylabel(stat.title() + " (Deaths/Cases)")
        color = theme.get_colors(reverse=True)[0]
    else:
        console.print("Invalid stat selected.\n")
        return

    ax.plot(data.index, data, color=color, alpha=0.2)
    ax.plot(data.index, data.rolling(7).mean(), color=color)
    ax.set_title(f"{country} COVID {stat}")
    ax.set_xlim(data.index[0], data.index[-1])
    theme.style_primary_axis(ax)

    if external_axes is None:
        theme.visualize_output()


@log_start_end(log=logger)
def display_covid_ov(
    country: str,
    raw: bool = False,
    limit: int = 10,
    export: str = "",
    plot: bool = True,
) -> None:
    """Prints table showing historical cases and deaths by country.

    Parameters
    ----------
    country: str
        Country to get data for
    raw: bool
        Flag to display raw data
    limit: int
        Number of raw data to show
    export: str
        Format to export data
    plot: bool
        Flag to display historical plot
    """
    if country.lower() == "us":
        country = "US"
    if plot:
        plot_covid_ov(country)
    if raw:
        data = covid_model.get_covid_ov(country, limit)
        print_rich_table(
            data,
            headers=[x.title() for x in data.columns],
            show_index=True,
            index_name="Date",
            title=f"[bold]{country} COVID Numbers[/bold]",
        )

    if export:
        export_data(export, os.path.dirname(os.path.abspath(__file__)), "ov", data)


@log_start_end(log=logger)
def display_covid_stat(
    country: str,
    stat: str = "cases",
    raw: bool = False,
    limit: int = 10,
    export: str = "",
    plot: bool = True,
) -> None:
    """Prints table showing historical cases and deaths by country.

    Parameters
    ----------
    country: str
        Country to get data for
    stat: str
        Statistic to get.  Either "cases", "deaths" or "rates"
    raw: bool
        Flag to display raw data
    limit: int
        Number of raw data to show
    export: str
        Format to export data
    plot : bool
        Flag to plot data
    """
    data = covid_model.get_covid_stat(country, stat, limit)
    if plot:
        plot_covid_stat(country, stat)

    if raw:
        print_rich_table(
            data,
            headers=[stat.title()],
            show_index=True,
            index_name="Date",
            title=f"[bold]{country} COVID {stat}[/bold]",
        )
    if export:
        data["date"] = data.index
        data = data.reset_index(drop=True)
        # make sure date is first column in export
        cols = data.columns.tolist()
        cols = cols[-1:] + cols[:-1]
        data = data[cols]
        export_data(export, os.path.dirname(os.path.abspath(__file__)), stat, data)


@log_start_end(log=logger)
def display_case_slopes(
    days_back: int = 30,
    limit: int = 10,
    threshold: int = 10000,
    ascend: bool = False,
    export: str = "",
) -> None:
    """Prints table showing countries with the highest case slopes.

    Parameters
    ----------
    days_back: int
        Number of historical days to get slope for
    limit: int
        Number to show in table
    ascend: bool
        Flag to sort in ascending order
    threshold: int
        Threshold for total cases over period
    export : str
        Format to export data
    """
    data = covid_model.get_case_slopes(days_back, limit, threshold, ascend)

    print_rich_table(
        data,
        show_index=True,
        index_name="Country",
        title=f"[bold]{('Highest','Lowest')[ascend]} Sloping Cases[/bold] (Cases/Day)",
    )

    export_data(
        export,
        os.path.dirname(os.path.abspath(__file__)),
        f"slopes_{days_back}day",
        data,
    )
