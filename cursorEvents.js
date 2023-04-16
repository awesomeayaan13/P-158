AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handlePosterListState: function () {
      const id = this.el.getAttribute("id");
      const posterId = ["meme1", "meme2", "meme3", "meme4"];
      if (posterId.includes(id)) {
        const posterContainer = document.querySelector("#poster-container");
        posterContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#1565c0",
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePosterListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId}=this.data
        if(selectedItemId){
          const el=document.querySelector(`#${selectedItemId}`)
          const id=el.getAttribute("id")
          if(id==selectedItemId){
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      })
    },
  });
  