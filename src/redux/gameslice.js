import { createSlice } from '@reduxjs/toolkit'


export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    GameList: [
      {
        name: "Diablo 2",
        coverUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.launchbox-app.com%2Fd1fe0aa2-755f-4b13-ba78-a906b8ca39bb.jpg&f=1&nofb=1&ipt=8f949cc238acc5e271dc36bbfec33eef076b817e72a596a464c583d46984138c&ipo=images" ,
        description: "" ,
        genre: "Arcade",
        developer: "",
        year: "",
    },
    {
      name: "Splinter Cell - Chaos Theory",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYTAzYWQ4NGEtNWEwMS00M2IwLTk5ZjktNjRjM2FhYWJjOGVjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg&f=1&nofb=1&ipt=08d6a35de5835eaf967478c045186d0067a5aa728bf7d0278b4f4913afdfa0f5&ipo=images" ,
      description: "" ,
      genre: "RPG",
      developer: "UBIsoft",
      year: "", 
    },
    {
      name: "Assassin's Creed",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette2.wikia.nocookie.net%2Fassassinscreed%2Fimages%2F6%2F6a%2FAccover.jpg%2Frevision%2Flatest%3Fcb%3D20091222104717&f=1&nofb=1&ipt=871765e2468d16d3d8f1cb6110b89687264ed79a929ef2244c1dc01e08ce8a76&ipo=images" ,
      description: "" ,
      genre: "RPG",
      developer: "",
      year: "",
    },
    {
      name: "IGI 2 Covert Strike",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e60LWJH4tQOOLECzG1jMNwHaGx%26pid%3DApi&f=1&ipt=8979b8bc830aa0ac8a72db9bba2dc00b0e3d068ce2ded4cce8f9dff7329c1403&ipo=images" ,
      description: "" ,
      genre: "",
      developer: "",
      year: "",
    },
    {
      name: "Total War - Shogun 2",
      coverUrl : "https://www.gamekeys.se/wp-content/uploads/2021/01/total-war-shogun-2_cover_original-717x1024.png" ,
      description: "" ,
      genre: "Strategy",
      developer: "Sega",
      year: "",
    },
    {
      name: "Rise of Nations",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foldpcgaming.net%2Fwp-content%2Fgallery%2Frise-of-nations%2F19.jpg&f=1&nofb=1&ipt=d1c36bcef570967824c87ed7c39d52008fceb339ea4ed5d1b4b70571bcea18f3&ipo=images" ,
      description: "" ,
      genre: "",
      developer: "Microsoft Studios",
      year: "",
    },
    {
      name: "Age of Empires 2 - The Age of Kings",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F792-age-of-empires-ii-the-age-of-kings-windows-front-cover.jpg&f=1&nofb=1&ipt=e9d2177b36ff47ae3a0dda005f752b1ea6cefeab96e0fd7269c28a4f58a59cb1&ipo=images" ,
      description: "" ,
      genre: "Strategy",
      developer: "Microsoft Studios",
      year: "",
    },
    {
      name: "GTA 2",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fgtawiki%2Fimages%2F4%2F40%2FGTA2_Box_Art.jpg%2Frevision%2Flatest%3Fcb%3D20060731005707&f=1&nofb=1&ipt=d583ec11bafa9b7fde6ff86b29a5a6bac52d75db4771fe44cf8ad23764c8168e&ipo=images" ,
      description: "" ,
      genre: "",
      developer: "Rockstar",
      year: "",
    },
    {
      name: "Far Cry 3",
      coverUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.38505.71220804959101191.bad88979-60b4-40b4-af6d-182d4534c987.f4e71fb2-e446-46e4-8291-e474508a0c71%3Fmode%3Dscale%26q%3D90%26h%3D1080%26w%3D1920&f=1&nofb=1&ipt=859e22a6a85ed94341e5b0032e00057da3082879a0fdc421334dbf400f5b9492&ipo=images" ,
      description: "" ,
      genre: "",
      developer: "",
      year: "",
    },
    {
      name: "GTA San Andreas",
      coverUrl : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34724113-9c69-4c3e-a939-f6507c76f702/dgqa56v-25288944-f2e6-4d92-832c-61568e059943.png/v1/fill/w_1280,h_1707,q_80,strp/cover_of_gta_san_andreas_remastered_by_rainerdrakkar_dgqa56v-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzM0NzI0MTEzLTljNjktNGMzZS1hOTM5LWY2NTA3Yzc2ZjcwMlwvZGdxYTU2di0yNTI4ODk0NC1mMmU2LTRkOTItODMyYy02MTU2OGUwNTk5NDMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3qS2AdDPQ7SUhEjREum8dTw7C6DolDUaANCOucTMrEU" ,
      description: "" ,
      genre: "",
      developer: "Rockstar",
      year: "",
    },
  
  
  
      ]
  },
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

    deleteGame: (state, action) => {
      state.GameList=state.GameList.filter((el)=>el.name!== action.payload.name)
    },
    editGame: (state, action) => {
      let i=state.GameList.findIndex((el)=>el.name===action.payload.name);
      state.GameList[i]=action.payload.edited;
    },
    addGame: (state, action) => {
      state.GameList.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addGame, deleteGame, editGame } = gameSlice.actions

export default gameSlice.reducer