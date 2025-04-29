const API_URL = 'http://[::1]:3003/api/recipes';

const form = document.getElementById('recipe-form');
const tableBody = document.querySelector('#recipes-table tbody');

// Load all recipes
async function loadRecipes() {
  const res = await fetch(API_URL);
  const recipes = await res.json();

  tableBody.innerHTML = '';
  recipes.forEach(recipe => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${recipe.name}</td>
      <td>${recipe.chef}</td>
      <td>${recipe.ingredients}</td>
      <td>${recipe.prepTime} min</td>
      <td>${recipe.rating}</td>
      <td>
        <button onclick="deleteRecipe('${recipe._id}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Add new recipe
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newRecipe = {
    name: document.getElementById('name').value,
    chef: document.getElementById('chef').value,
    ingredients: document.getElementById('ingredients').value,
    prepTime: Number(document.getElementById('prepTime').value),
    rating: Number(document.getElementById('rating').value),
  };

  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRecipe),
  });

  form.reset();
  loadRecipes();
});

// Delete recipe
async function deleteRecipe(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  loadRecipes();
}

// Load recipes initially
loadRecipes();
