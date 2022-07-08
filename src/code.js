

const API = "https://tennis-live-data.p.rapidapi.com/player/86064";
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7dfec6738msh4c82805be1c678bp187d53jsn40336a512070',
		'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};

(async () => {
    try {
    const roger = await fetchData(`${API}`);
    console.log(roger);
    let view = `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="https://media.revistagq.com/photos/5d1f1a3d6994dccdc3778242/3:4/w_2025,h_2700,c_limit/Roger-Federer.jpg" alt =" ${roger.results.player.full_name} from ${roger.results.player.country}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${roger.results.player.full_name}
          </h3>
        </div>
      </div>
      `
      
    content.innerHTML = view;
    } catch (error) {
      console.error(error)
    }
}
)()