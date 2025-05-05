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

      tr.appendChild(createCell('Name of Dish', recipe.name));
      tr.appendChild(createCell("Chef's Name", recipe.chef));
      tr.appendChild(createCell('Ingredients', recipe.ingredients));
      tr.appendChild(createCell('Prep Time', `${recipe.prepTime} min`));
      tr.appendChild(createCell('Rating', `${recipe.rating}/10`));

      const tdActions = document.createElement('td');
      tdActions.setAttribute('data-label', 'Actions');

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.onclick = async () => {
        const result = await Swal.fire({
          title: 'Delete Recipe?',
          text: "Are you sure you want to delete this recipe?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel'
        });
      
        if (result.isConfirmed) {
          await fetch(`${API_URL}/${recipe._id}`, { method: 'DELETE' });
          loadRecipes();
      
          Swal.fire({
            title: 'Deleted!',
            text: 'The recipe has been deleted.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });
        }
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
