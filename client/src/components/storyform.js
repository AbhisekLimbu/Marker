import React, { useState } from 'react';
import './storyform.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

const StoryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('location', location);

    const response = await fetch('/submit-story', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Story submitted successfully');
      setTitle('');
      setContent('');
      setImage(null);
      setLocation('');
    } else {
      alert('Failed to submit story');
    }
  };

  const handleDiscardImage = () => {
    setImage(null);
    document.getElementById('image').value = '';
  };

  return (
    <div className="container">
      <h1>TELL YOUR STORY</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ flex: 1 }}
          />
          {image && (
            <button
              type="button"
              onClick={handleDiscardImage}
              style={{
                marginLeft: '10px',
                padding: '10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Discard
            </button>
          )}
        </div>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <LocationInput setLocation={setLocation} />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%' }}
        />

        <button type="submit">POST</button>
      </form>
    </div>
  );
};

const LocationInput = ({ setLocation }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log("📍 Coordinates: ", { lat, lng });
      setLocation(address);
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter a location"
        style={{ padding: '10px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ddd', width: '100%' }}
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default StoryForm;
