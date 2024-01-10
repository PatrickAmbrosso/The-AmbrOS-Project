import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/PatrickAmbrosso",
      GitHub: "https://github.com/PatrickAmbrosso",
      "Twitter (X)": "https://x.com/PatrickAmbrosso",
      Instagram: "https://www.instagram.com/PatrickAmbrosso",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.MobileOnly(Component.Darkmode()),
    Component.DesktopOnly(
      Component.Explorer({
        title: "Navigation",
        folderDefaultState: "collapsed",
        folderClickBehavior: "collapse",
        useSavedState: false,
        filterFn: (node) => {
          // set containing names of everything you want to include
          const include = new Set([
            "Musings",
            "Reflections",
            "Expeditions",
            "Transcendence",
            "Showcase",
          ])
          return include.has(node.name) // && !!node.file
        },
        mapFn: (node) => {
          // don't change the name of the root node
          if (node.depth > 0) {
            // define a dictionary for mapping node names to icons
            const iconMapping: {[key: string]: string} = {
              Musings: "✨",
              Reflections: "📖",
              Expeditions: "🌏",
              Transcendence: "🙏",
              Showcase: "🎉",
            }

            // check if the node's name is in the dictionary
            if (node.file && node.name in iconMapping) {
              node.displayName = iconMapping[node.name] + " " + node.displayName
            }
          }
        },
        sortFn: (a, b) => {
          const nameOrderMap: Record<string, number> = {
            Musings: 100,
            Reflections: 200,
            Expeditions: 300,
            Transcendence: 400,
            Showcase: 500,
          }

          let orderA = 0
          let orderB = 0

          if (a.file && a.file.slug) {
            orderA = nameOrderMap[a.file.slug] || 0
          } else if (a.name) {
            orderA = nameOrderMap[a.name] || 0
          }

          if (b.file && b.file.slug) {
            orderB = nameOrderMap[b.file.slug] || 0
          } else if (b.name) {
            orderB = nameOrderMap[b.name] || 0
          }

          return orderA - orderB
        },
        order: ["filter", "map", "sort"],
      }),
    ),
    // Component.DesktopOnly(
    //   Component.RecentNotes({
    //     title: "Recent Writings",
    //     limit: 5,
    //   }),
    // ),
    Component.DesktopOnly(Component.TableOfContents())
  ],
  right: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.Graph({
      localGraph: {
        // drag: true, // whether to allow panning the view around
        // zoom: true, // whether to allow zooming in and out
        depth: 1, // how many hops of notes to display
        // scale: 1.1, // default view scale
        // repelForce: 0.5, // how much nodes should repel each other
        // centerForce: 0.3, // how much force to use when trying to center the nodes
        // linkDistance: 30, // how long should the links be by default?
        // fontSize: 0.6, // what size should the node labels be?
        // opacityScale: 1, // how quickly do we fade out the labels when zooming out?
        // removeTags: [], // what tags to remove from the graph
        showTags: false, // whether to show tags in the graph
      },
      globalGraph: {
        // drag: true,
        // zoom: true,
        depth: -1,
        // scale: 0.9,
        // repelForce: 0.5,
        // centerForce: 0.3,
        // linkDistance: 30,
        // fontSize: 0.6,
        // opacityScale: 1,
        // removeTags: [], // what tags to remove from the graph
        showTags: false, // whether to show tags in the graph
      },
    }),
    // Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
