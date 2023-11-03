const url = 'https://api.spacexdata.com/v5/launches'

let allData;
let dataUpcoming;
let dataPast;

async function requisicaoLancamentos() {
  try {
    const [responseUpcoming, responsePast] = await Promise.all([
      fetch(`${url}/upcoming`),
      fetch(`${url}/past`)
    ]);

    if (!responseUpcoming.ok || !responsePast.ok) {
      throw new Error('Erro na resposta da API');
    }

    dataUpcoming = await responseUpcoming.json();
    dataPast = await responsePast.json();

    allData = [...dataUpcoming, ...dataPast];

    const loading = qs("#loading");
    loading.classList.add('hide'); // Removendo o Loading...

    formatarLancamentos(dataPast);
    
  } catch (error) {
    console.error('Erro na requisição da API:', error);
  }
}
requisicaoLancamentos()