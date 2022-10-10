// import
import React from "react"
import { useRef, useEffect } from "react"

const AutoComplete = () => {
 const autoCompleteRef = useRef()
 const inputRef = useRef()
 const options = {
  componentRestrictions: { country: "th" },
  fields: ["address_components", "geometry", "latLngLiteral", "icon", "name"],
  types: []
 }
 useEffect(() => {
   autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    inputRef.current,
    options
   );
   autoCompleteRef.current.addListener("place_changed", async function () {
    const place = await autoCompleteRef.current.getPlace();
    console.log({ place });
		console.log(place.geometry)
   });
  });
 return (
  <div>
   {/* <label>enter address :</label> */}
   <input type="text" class="form-control" name="search" required ref={inputRef} />
  </div>
 )
}

// export
export default AutoComplete
