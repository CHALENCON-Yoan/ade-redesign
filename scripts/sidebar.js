function dragSidebarToClose() {
    let startX = 0;
    let currentX = 0;
  
    const sidebar = document.querySelector("#sidebar");
  
    sidebar.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
      sidebar.style.transition = "none";
    });
  
    sidebar.addEventListener("touchmove", (event) => {
      currentX = event.touches[0].clientX;
      const translateX = Math.max(0, currentX - startX);
      sidebar.style.transform = `translateX(${translateX}px)`;
    });
  
    sidebar.addEventListener("touchend", () => {
      const translateX = currentX - startX;
      sidebar.style.transition = "transform 0.3s ease-in-out";
  
      if (translateX > 100) {
        closeSidebar();
      } else {
        sidebar.style.transform = "translateX(0)";
      }
    });
  }
  
  function openSidebar() {
    const sidebar = document.querySelector("#sidebar");
    const backgroundBlur = document.querySelector("#backgroundBlur");
  
    sidebar.classList.add("sidebarActive");
    sidebar.style.transform = "translateX(0)";
    backgroundBlur.classList.add("backgroundBlurActive");
  
    dragSidebarToClose();
  }
  
  function closeSidebar() {
    const sidebar = document.querySelector("#sidebar");
    const backgroundBlur = document.querySelector("#backgroundBlur");
  
    sidebar.classList.remove("sidebarActive");
    sidebar.style.transform = "translateX(100%)";
    backgroundBlur.classList.remove("backgroundBlurActive");
  }
  
  function sidebar() {
    openSidebarButton = document.querySelector("#openSidebar");
    backgroundBlur = document.querySelector("#backgroundBlur");
    closeSidebarButton = document.querySelector("#closeSidebar");
  
    // To open the sidebar
    openSidebarButton.addEventListener("click", openSidebar);
  
    // To close the sidebar
    closeSidebarButton.addEventListener("click", closeSidebar);
    backgroundBlur.addEventListener("click", closeSidebar);
  }