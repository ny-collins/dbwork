const API_URL = 'https://dbwork-api.onrender.com/api/recipes';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#recipe-form');
  const tableBody = document.querySelector('#recipeTable tbody');

  const loadRecipes = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const recipes = await res.json();

      tableBody.innerHTML = '';
      recipes.forEach(recipe => {
        console.log('Loading recipe:', recipe); // Debug log

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td data-label="Name">${recipe.name}</td>
          <td data-label="Chef">${recipe.chef}</td>
          <td data-label="Ingredients">${recipe.ingredients}</td>
          <td data-label="Prep Time">${recipe.prepTime}</td>
          <td data-label="Rating">${recipe.rating}</td>
          <td data-label="Actions">
            <div class="action-wrapper">
              <button onclick="deleteRecipe('${recipe._id}')">Delete</button>
            </div>
          </td>
        `;
        tableBody.appendChild(tr);
      });
    } catch (error) {
      console.error('Error loading recipes:', error);
    }
  };

  const deleteRecipe = async (recipeId) => {
    if (!recipeId) {
      console.error('Invalid recipe ID');
      return;
    }

    try {
      await fetch(`${API_URL}/${recipeId}`, { method: 'DELETE' });
      console.log(`Recipe ${recipeId} deleted successfully`);
      loadRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(form);
    const newRecipe = {
      name: formData.get('name'),
      chef: formData.get('chef'),
      ingredients: formData.get('ingredients'),
      prepTime: Number(formData.get('prepTime')),
      rating: Number(formData.get('rating')),
    };

    if (isNaN(newRecipe.prepTime) || isNaN(newRecipe.rating)) {
      alert('Preparation time and rating must be numbers.');
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);
      console.log('Recipe added successfully');
      form.reset();
      loadRecipes();
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  });

  loadRecipes();
});
