# Interactive Plots

An experiment using the `cairo` graphics library shows that a PDF can
be directly produced without using LaTeX as intermediate using the
network information. This functionality --- although not as complete
as the one in the example --- has been exposed as an internal network
function for now. Further functionality related to this idea can be
embedding network information in simple plots, or generate the whole
plot along side the network information.

It might be a good idea to make several functions that can export the interactive plots in LaTeX, PDF, PNG, SVG, HTML, etc. separately instead of single format.

LaTeX and HTML will be easier due to text nature, for others I might have to spend time with some more experimentation on cairo.
