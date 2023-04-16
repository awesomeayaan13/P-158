AFRAME.registerComponent("meme", {
    init: function () {
      this.placesContainer = this.el;
      this.createPoster()
      
    },
  
    createPoster: function () {
      const thumbNailsRef = [
        {
          id: "meme1",
          title: "Saul",
          url: "./assets/FgsYDQ_VsAIfWh-.jpg",
        },
        {
          id: "meme2",
          title: "Pikachu",
          url: "./assets/Funny-Memes-44.jpg",
        },
  
        {
          id: "meme3",
          title: "Waltuh",
          url: "./assets/hank_died_walt_cries_(breaking_bad_spoilers)_1-35_screenshot.jpg",
        },
        {
          id: "meme4",
          title: "Dog",
          url: "./assets/st,small,507x507-pad,600x600,f8f8f8.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = -5;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position,item.id)
  
        // Thumbnail Element
        const thumbnail=this.createThumNail(item)
        borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:22,
        height:30,
        
  
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{color:"green",opacity:1})
      return entityEl
    },
    createThumNail:function(item){
      const entityEl=document.createElement("a-entity")
      
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28
  
      })
      
      entityEl.setAttribute("position",{x:0,y:0,z:0.1})
      entityEl.setAttribute("material",{src:item.url})
      return entityEl
    },
    createTitleEl:function(position,item){
      const entityEl=document.createElement("a-entity")
     
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#e65100",
        value:item.title
  
      })
      const elPosition=position
      elPosition.y-20
      entityEl.setAttribute("position",elPosition)
      return entityEl
    }
  });
  