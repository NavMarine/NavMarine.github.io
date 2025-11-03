document.getElementById('routeForm').addEventListener('submit', e => {
  e.preventDefault();
  const depart = document.getElementById('depart').value;
  const arrivee = document.getElementById('arrivee').value;

  document.getElementById('resultat').innerHTML = `
    <h3>Plan de route simulé :</h3>
    <p>De <b>${depart}</b> à <b>${arrivee}</b></p>
    <p>Distance estimée : 35 milles nautiques</p>
    <p>Temps estimé : 3h20</p>
    <p>Canal VHF à veiller : 16, 12</p>
    <p>Port d’arrivée : coordonnées et contacts intégrés</p>
  `;
});
