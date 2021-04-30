
//* for switching between tabs in the nav bar, only an esthetic feature

function tabSwitch(props) {
    if (props.slnk === 1) {
        document.getElementById("lnk1").classList.add("l-switched");
        document.getElementById("lnk2").classList.remove("l-switched");
        document.getElementById("lnk3").classList.remove("l-switched");
      }
      else if (props.slnk === 2) {
        document.getElementById("lnk2").classList.add("l-switched");
        document.getElementById("lnk1").classList.remove("l-switched");
        document.getElementById("lnk3").classList.remove("l-switched");
      }
      else if (props.slnk === 3) {
        document.getElementById("lnk3").classList.add("l-switched");
        document.getElementById("lnk2").classList.remove("l-switched");
        document.getElementById("lnk1").classList.remove("l-switched");
      }
    return (
        
            <div >
                
            </div>
        
    )
}

export default tabSwitch;
