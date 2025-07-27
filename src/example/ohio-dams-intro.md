# Effects of Dams

Ohio River is one of the largest river basin in the USA. The development of the basin and its river system started early, so we have a problem where many streamgages never recorded the river in their natural state. In these examples, we'll try to load a network, validate the network based on metadata, count the dams/gages, and get the year of earliest constructed dam upstream for further analysis.

The examples in this chapter loads the data for the dams from National Inventory of Dams (NID), and USGS gages from Gages.shp (EPA and USGS), and uses the network developed using the NHDPlus streamlines above the Ohio River at Smithland Streamgage.


The files used in this demo are follows:

| Data                                                                                | Filename            | Source                     |
|-------------------------------------------------------------------------------------|---------------------|----------------------------|
| [NID Data](https://nid.sec.usace.army.mil/#/downloads)                              | `nid-uniq.gpkg`     | National Inventory of Dams |
| [Gage Locations](https://www.sciencebase.gov/catalog/item/577445bee4b07657d1a991b6) | `GageLoc.shp.zip`   | US EPA  & USGS             |
| [Gage Attributes](https://pubs.usgs.gov/publication/70046617)                       | `gages-II.gpkg`     | USGS                       |
| Gage Drainage                                                                       | `usgs-drainage.csv` | Scrapped from USGS NWIS    |

Except NID data (due to large size), the others are also in the `src/data/ohio-river` directory on [the repository of this book](https://github.com/Nadi-System/nadi-book). Place the nid data into it before running the examples from this chapter. If you're using the repository, you also have to unzip the `gages-II.gpkg.zip` into `gages-II.gpkg`.


The Gage Drainage data is scrapped manually for some basins from the USGS website to increase the amount of gage we know the drainage area of, you can skip that in loading and still be able to do your analysis.
