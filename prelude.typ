#set document(title: "Network Analysis and Data Integration (NADI) Book")
#set document(author: ("Gaurav Atreya"))
#set heading(numbering: "1.", depth: 3)
#set page(paper: "us-letter")
#set text(size: 11pt)
#set text(font: "Noto Sans")
#set par(spacing:2em, leading: .8em, justify: true)
#set raw(syntaxes: "typst/task.sublime-syntax")
#set raw(syntaxes: "typst/signature.sublime-syntax")
#set raw(syntaxes: "typst/stp.sublime-syntax")

#show heading: it => [
    #block(above: 2em, below: 2em, it)
]
#show link: it => {
  if type(it.dest) != str {
    text(fill:green, it)
  }
  else {
    text(fill:blue, it)
  }
}
#show ref: underline
#show ref: set text(green)
#show raw: set block(fill: luma(230), inset: 8pt, radius: 4pt, width: 100%)
#show outline.entry.where(level: 1):it => {
                                    v(11pt, weak: true)
                                   strong(it) 
                                }

#{
    set page(fill: gradient.linear(luma(100), luma(200)).sharp(20, smoothness: 40%))
    set align(center)
    text(17pt, [Network Analysis and Data Integration (NADI) System])
    v(2mm)
    text(17pt, [User Manual])

    {
        image("cover.png", width:100%)
    }
    text(27pt, [NADI Book ])
    text(17pt, [Version: 0.8.0])

    v(1mm)
    text(12pt, [Web Version: ] + link("https://nadi-system.github.io/0.8.0"))

    v(1fr)
    grid(
        rows: 0.5cm,
        columns: 1,
        [Gaurav Atreya],
        [2026-05-13]
    )
}

#pagebreak()
#set page(numbering: "i")
#counter(page).update(1)

#let unum_chap(contents) = align(center, text(size:16pt, contents))
#let bookpart(contents) = block(fill:luma(200), inset: 8pt, width: 100%, align(center, text(size:16pt, contents)))

#show quote: set block(fill: luma(230), inset: 8pt, radius: 4pt, width: 100%)
#let htmlblock(cat, contents) = block(fill: yellow.lighten(50%), inset: 8pt, radius: 4pt, width: 100%, contents)

#outline(depth: 2, indent: 2em)
#pagebreak()
#counter(page).update(1)
#set page(numbering: "1", header:[#h(1fr) Nadi Book])
