/**
 * Adds the ability to toggle facets.
 */
const Anchors = document.getElementsByClassName("facet");
// Loop through facets and add a click listener.
for (let i = 0; i < Anchors.length; i += 1) {
  Anchors[i].addEventListener(
    "click",
    function addListeners(event) {
      event.preventDefault();
      const value = this.getAttribute("data-value");
      const oldValue = document.getElementById("type").getAttribute("value");
      if (oldValue.length === undefined || oldValue === "") {
        document.getElementById("type").setAttribute("value", value);
      } else {
        document.getElementById("type").setAttribute("value", "");
      }
      document.getElementById("search_form").submit();
    },
    false
  );
}
