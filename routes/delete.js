const deleteStory = async (id) => {
  try {
    const confirmed = window.confirm('Are you sure you want to delete this story?');
    if (confirmed) {
      const response = await axios.delete(`http://localhost:3001/stories/${id}`);
      console.log('Delete response:', response.data); // Add this line for logging
      // Update the stories state to remove the deleted story
      setStories(stories.filter(story => story._id !== id));
    }
  } catch (error) {
    console.error('Error deleting story:', error);
  }
};
