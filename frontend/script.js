const API_URL = 'https://dbwork-api.onrender.com/api/recipes';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#recipe-form');
  const tableBody = document.querySelector('#recipeTable tbody');

  const createCell = (label, value) => {
    const td = document.createElement('td');
    td.textContent = value;
    td.setAttribute('data-label', label);
    return td;
  };

  const loadRecipes = async () => {
    const res = await fetch(API_URL);
    const recipes = await res.json();

    tableBody.innerHTML = '';

    recipes.forEach(recipe => {
      const tr = document.createElement('tr');

      tr.appendChild(createCell('Name', recipe.name));
      tr.appendChild(createCell('Chef', recipe.chef));
      tr.appendChild(createCell('Ingredients', recipe.ingredients));
      tr.appendChild(createCell('Prep Time', recipe.prepTime));
      tr.appendChild(createCell('Rating', recipe.rating));

      const tdActions = document.createElement('td');
      tdActions.setAttribute('data-label', 'Actions');

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.onclick = async () => {
        await fetch(`${API_URL}/${recipe._id}`, { method: 'DELETE' });
        loadRecipes();
      };

      tdActions.appendChild(delBtn);
      tr.appendChild(tdActions);

      tableBody.appendChild(tr);
    });
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

    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    });

    form.reset();
    loadRecipes();
  });

  loadRecipes();
});
