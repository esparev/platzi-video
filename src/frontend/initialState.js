const initialState = {
  user: {},
  playing: {},
  searchResult: [],
  myList: [],
  trends: [
    {
      id: 1,
      slug: "tvshow-1",
      title: "Under the Rainbow Light",
      type: "Scripted",
      language: "English",
      year: 2012,
      contentRating: "16+",
      duration: 133,
      cover:
        "https://images.pexels.com/photos/2859616/pexels-photo-2859616.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      slug: "tvshow-2",
      title: "Something in the Tunnel",
      type: "Suspense",
      language: "English",
      year: 2015,
      contentRating: "16+",
      duration: 125,
      cover:
        "https://images.unsplash.com/photo-1610559729383-e209d4271dbd?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8Mjc4NDc0NTV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 3,
      slug: "tvshow-3",
      title: "Alone in Space",
      type: "Suspense",
      language: "English",
      year: 2013,
      contentRating: "16+",
      duration: 115,
      cover:
        "https://images.pexels.com/photos/7662609/pexels-photo-7662609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 4,
      slug: "tvshow-4",
      title: "Scam",
      type: "Crime",
      language: "English",
      year: 2017,
      contentRating: "16+",
      duration: 115,
      cover:
        "https://images.pexels.com/photos/6963103/pexels-photo-6963103.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 5,
      slug: "tvshow-5",
      title: "No Time",
      type: "Action",
      language: "English",
      year: 2019,
      contentRating: "16+",
      duration: 100,
      cover:
        "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 6,
      slug: "tvshow-6",
      title: "Near the Hidden",
      type: "Suspense",
      language: "English",
      year: 2020,
      contentRating: "16+",
      duration: 134,
      cover:
        "https://images.pexels.com/photos/2422257/pexels-photo-2422257.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 7,
      slug: "tvshow-7",
      title: "HumaNOid",
      type: "Suspense",
      language: "English",
      year: 2000,
      contentRating: "16+",
      duration: 149,
      cover:
        "https://images.pexels.com/photos/8319942/pexels-photo-8319942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 8,
      slug: "tvshow-8",
      title: "Mind",
      type: "Crime",
      language: "English",
      year: 2019,
      contentRating: "16+",
      duration: 100,
      cover:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 9,
      slug: "tvshow-9",
      title: "The Colored Hallway",
      type: "Scripted",
      language: "English",
      year: 2018,
      contentRating: "16+",
      duration: 164,
      cover:
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVvbiUyMHNpZ250fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 10,
      slug: "tvshow-10",
      title: "The One Unknown",
      type: "Action",
      language: "English",
      year: 2020,
      contentRating: "16+",
      duration: 137,
      cover:
        "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 11,
      slug: "tvshow-11",
      title: "Grand Hotel",
      type: "Crime",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 163,
      cover:
        "https://images.unsplash.com/photo-1601577660951-9c33bf5ad9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=486&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 12,
      slug: "tvshow-12",
      title: "The Below",
      type: "Adventure",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 194,
      cover:
        "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ],
  originals: [
    {
      id: 13,
      slug: "tvshow-13",
      title: "Final Space",
      type: "Adventure",
      language: "English",
      year: 2017,
      contentRating: "16+",
      duration: 124,
      cover:
        "https://images.pexels.com/photos/3800795/pexels-photo-3800795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 14,
      slug: "tvshow-14",
      title: "The InBetween",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 179,
      cover:
        "https://images.unsplash.com/photo-1613190419621-85c6e1763d08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 15,
      slug: "tvshow-15",
      title: "Alone in Space",
      type: "Suspense",
      language: "English",
      year: 2013,
      contentRating: "16+",
      duration: 115,
      cover:
        "https://images.pexels.com/photos/7662609/pexels-photo-7662609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 16,
      slug: "tvshow-16",
      title: "Dead End",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 179,
      cover:
        "https://images.pexels.com/photos/1469196/pexels-photo-1469196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 17,
      slug: "tvshow-17",
      title: "The Daft & The Punk",
      type: "Documentary",
      language: "English",
      year: 2012,
      contentRating: "16+",
      duration: 148,
      cover:
        "https://images.unsplash.com/photo-1557040135-9dc2a6b60411?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFsaWVuJTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 18,
      slug: "tvshow-18",
      title: "Alien Highway",
      type: "Action",
      language: "English",
      year: 2019,
      contentRating: "16+",
      duration: 128,
      cover:
        "https://images.pexels.com/photos/7459424/pexels-photo-7459424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 19,
      slug: "tvshow-19",
      title: "Out of Sight",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 346,
      cover:
        "https://images.unsplash.com/photo-1629067654058-dc69da3515b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 20,
      slug: "tvshow-20",
      title: "Strange Angel",
      type: "War",
      language: "English",
      year: 2015,
      contentRating: "16+",
      duration: 226,
      cover:
        "https://images.pexels.com/photos/2043837/pexels-photo-2043837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 21,
      slug: "tvshow-21",
      title: "Private Eyes",
      type: "Comedy",
      language: "English",
      year: 2018,
      contentRating: "16+",
      duration: 190,
      cover:
        "https://images.unsplash.com/photo-1516307318288-46d4194fe79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 22,
      slug: "tvshow-22",
      title: "The Tower",
      type: "Drama",
      language: "English",
      year: 2010,
      contentRating: "16+",
      duration: 160,
      cover:
        "https://images.unsplash.com/photo-1530919424169-4b95f917e937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 23,
      slug: "tvshow-23",
      title: "Control",
      type: "Drama",
      language: "English",
      year: 2010,
      contentRating: "16+",
      duration: 160,
      cover:
        "https://images.pexels.com/photos/8090151/pexels-photo-8090151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 24,
      slug: "tvshow-24",
      title: "Control: Override",
      type: "Drama",
      language: "English",
      year: 2010,
      contentRating: "16+",
      duration: 160,
      cover:
        "https://images.pexels.com/photos/8090293/pexels-photo-8090293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat sed porttitor sollicitudin nullam sit diam. Elit et nunc ac augue. Potenti at aliquam lectus magna vestibulum hendrerit. Posuere integer quam enim at massa enim auctor.",
      source:
        "https://commondatastoragegoogleapis.con/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  ],
};

export default initialState;
