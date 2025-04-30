const API_URL = 'https://dbwork-api.onrender.com/api/recipes';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#recipe-form');
  const tableBody = document.querySelector('#recipeTable tbody');

  const loadRecipes = async () => {
    const res = await fetch(API_URL);
    const recipes = await res.json();

    tableBody.innerHTML = '';
    recipes.forEach(recipe => {
      const tr = document.createElement('tr');

      const td1 = document.createElement('td');
      td1.textContent = recipe.name;
      td1.setAttribute('data-label', 'Name');

      const td2 = document.createElement('td');
      td2.textContent = recipe.chef;
      td2.setAttribute('data-label', 'Chef');

      const td3 = document.createElement('td');
      td3.textContent = recipe.ingredients;
      td3.setAttribute('data-label', 'Ingredients');

      const td4 = document.createElement('td');
      td4.textContent = recipe.prepTime;
      td4.setAttribute('data-label', 'Prep Time');

      const td5 = document.createElement('td');
      td5.textContent = recipe.rating;
      td5.setAttribute('data-label', 'Rating');

      const td6 = document.createElement('td');
      td6.setAttribute('data-label', 'Actions');

      const actionWrapper = document.createElement('div');
      actionWrapper.className = 'action-wrapper';

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.onclick = async () => {
        await fetch(`${API_URL}/${recipe._id}`, { method: 'DELETE' });
        loadRecipes();
      };

      actionWrapper.appendChild(delBtn);
      td6.appendChild(actionWrapper);

      tr.append(td1, td2, td3, td4, td5, td6);
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
