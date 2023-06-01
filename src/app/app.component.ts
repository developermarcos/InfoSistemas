import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'InfoSistemas';
}
// <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//     <script>
//       document.getElementById('filtrarBtn').addEventListener('click', function () {
//         var categoria = document.getElementById('categoria').value.trim().replace(/\s/g, "").toLowerCase();
//         var linhas = document.querySelectorAll('.table tbody tr');
//         console.log("aqui");
//         linhas.forEach(function (linha) {
//           var tdCategoria = linha.querySelector('td:nth-child(3)');
//           var categoriaTd = tdCategoria.textContent.trim().replace(/\s/g, "").toLowerCase();
//           if (categoria === '' || categoriaTd === categoria) {
//             linha.style.display = '';
//           } else {
//             linha.style.display = 'none';
//           }
//         });
//       });
  
//       document.getElementById('pesquisarInput').addEventListener('input', function () {
//         var filtro = this.value.trim().toLowerCase();
//         var linhas = document.querySelectorAll('.table tbody tr');
  
//         linhas.forEach(function (linha) {
//           var colunas = linha.querySelectorAll('td');
//           var encontrou = false;
  
//           colunas.forEach(function (coluna) {
//             if (coluna.textContent.toLowerCase().indexOf(filtro) > -1) {
//               encontrou = true;
//             }
//           });
  
//           if (encontrou) {
//             linha.style.display = '';
//           } else {
//             linha.style.display = 'none';
//           }
//         });
//       });
//     </script>