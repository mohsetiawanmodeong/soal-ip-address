let timerInterval;
let startTime;

function startTimer() {
   startTime = new Date();
   localStorage.setItem('startTime', startTime); // Simpan waktu mulai di localStorage
   timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
   const elapsedTime = new Date() - new Date(localStorage.getItem('startTime'));
   const minutes = Math.floor(elapsedTime / 60000);
   const seconds = Math.floor((elapsedTime % 60000) / 1000);
   const timerText = `${minutes}m ${seconds}s`;
   document.getElementById('timer').innerText = timerText;
   document.getElementById('modal-timer').innerText = timerText; // Update timer di modal
}

function stopTimer() {
   clearInterval(timerInterval);
   timerInterval = null;
   localStorage.removeItem('startTime'); // Hapus waktu mulai dari localStorage
}

function checkAllGrades100(grades) {
   return Object.values(grades).every(grade => grade === 100);
}

document.getElementById('generate-ip-btn').addEventListener('click', () => {
   startTimer();
});

document.getElementById('practice-form').addEventListener('submit', (event) => {
   event.preventDefault();
   const name = document.getElementById('name').value;
   const school = document.getElementById('school').value;
   const ip = event.target.dataset.ip;
   const mask = event.target.dataset.mask;
   const binary_ip = document.getElementById('binary-ip').value;
   const subnet_mask = document.getElementById('subnet-mask').value;
   const network_address = document.getElementById('network-address').value;
   const first_host = document.getElementById('first-host').value;
   const last_host = document.getElementById('last-host').value;
   const broadcast_address = document.getElementById('broadcast-address').value;
   const num_bits_host = document.getElementById('num-bits-host').value;
   const num_hosts = document.getElementById('num-hosts').value;

   saveFormData();

   fetch('grade.php', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ip, mask, binary_ip, subnet_mask, network_address, first_host, last_host, broadcast_address, num_bits_host, num_hosts, name, school })
   })
      .then(response => response.json())
      .then(data => {
         document.getElementById('results').innerHTML = `
               <p>Name: <b>${name}</b></p>
               <p>School: <b>${school}</b></p>
               <p>Binary IP Grade: <b>${data.binary_ip}</b></p>
               <p>Subnet Mask Grade: <b>${data.subnet_mask}</b></p>
               <p>Network Address Grade: <b>${data.network_address}</b></p>
               <p>First Host Grade: <b>${data.first_host}</b></p>
               <p>Last Host Grade: <b>${data.last_host}</b></p>
               <p>Broadcast Address Grade: <b>${data.broadcast_address}</b></p>
               <p>Number of Bits for Host Grade: <b>${data.num_bits_host}</b></p>
               <p>Number of Hosts Grade: <b>${data.num_hosts}</b></p>
            `;
         $('#resultModal').modal('show');

         if (checkAllGrades100(data)) {
            stopTimer();
         } else {
            if (!timerInterval) {
               startTimer();
            }
         }
      });
});

document.addEventListener('DOMContentLoaded', function () {
   const savedStartTime = localStorage.getItem('startTime');
   if (savedStartTime) {
      startTime = new Date(savedStartTime);
      timerInterval = setInterval(updateTimer, 1000);
   }
   // ... existing code ...
});

document.getElementById('fullscreen-btn').addEventListener('click', function () {
   if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
   } else {
      if (document.exitFullscreen) {
         document.exitFullscreen();
      }
   }
});

document.getElementById('refresh-btn').addEventListener('click', function () {
   location.reload();
});

document.getElementById('generate-ip-btn').addEventListener('click', function () {
   fetch('generate_ip.php')
      .then(response => response.json())
      .then(data => {
         localStorage.setItem('generatedIP', JSON.stringify(data));
         displayGeneratedIP(data);
      });
});

document.addEventListener('DOMContentLoaded', function () {
   const savedIP = localStorage.getItem('generatedIP');
   if (savedIP) {
      const data = JSON.parse(savedIP);
      displayGeneratedIP(data);
   }
   loadFormData();
   loadGeneralFormData(); // Muat data form umum saat halaman dimuat
});

function displayGeneratedIP(data) {
   document.getElementById('ip-display').textContent = `Generated IP: ${data.ip} / ${data.mask}`;
   document.getElementById('practice-form').dataset.ip = data.ip;
   document.getElementById('practice-form').dataset.mask = data.mask;
}

document.getElementById('practice-form').addEventListener('input', saveGeneralFormData); // Simpan data form setiap kali ada perubahan

function saveFormData() {
   const formData = {
      name: document.getElementById('name').value,
      school: document.getElementById('school').value,
      binary_ip: document.getElementById('binary-ip').value,
      subnet_mask: document.getElementById('subnet-mask').value,
      network_address: document.getElementById('network-address').value,
      first_host: document.getElementById('first-host').value,
      last_host: document.getElementById('last-host').value,
      broadcast_address: document.getElementById('broadcast-address').value,
      num_bits_host: document.getElementById('num-bits-host').value,
      num_hosts: document.getElementById('num-hosts').value
   };
   localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
   const savedFormData = localStorage.getItem('formData');
   if (savedFormData) {
      const formData = JSON.parse(savedFormData);
      document.getElementById('name').value = formData.name;
      document.getElementById('school').value = formData.school;
      document.getElementById('binary-ip').value = formData.binary_ip;
      document.getElementById('subnet-mask').value = formData.subnet_mask;
      document.getElementById('network-address').value = formData.network_address;
      document.getElementById('first-host').value = formData.first_host;
      document.getElementById('last-host').value = formData.last_host;
      document.getElementById('broadcast-address').value = formData.broadcast_address;
      document.getElementById('num-bits-host').value = formData.num_bits_host;
      document.getElementById('num-hosts').value = formData.num_hosts;
   }
}

function saveGeneralFormData() {
   const generalFormData = {
      name: document.getElementById('name').value,
      school: document.getElementById('school').value,
      binary_ip: document.getElementById('binary-ip').value,
      subnet_mask: document.getElementById('subnet-mask').value,
      network_address: document.getElementById('network-address').value,
      first_host: document.getElementById('first-host').value,
      last_host: document.getElementById('last-host').value,
      broadcast_address: document.getElementById('broadcast-address').value,
      num_bits_host: document.getElementById('num-bits-host').value,
      num_hosts: document.getElementById('num-hosts').value
   };
   localStorage.setItem('generalFormData', JSON.stringify(generalFormData));
}

function loadGeneralFormData() {
   const savedGeneralFormData = localStorage.getItem('generalFormData');
   if (savedGeneralFormData) {
      const generalFormData = JSON.parse(savedGeneralFormData);
      document.getElementById('name').value = generalFormData.name;
      document.getElementById('school').value = generalFormData.school;
      document.getElementById('binary-ip').value = generalFormData.binary_ip;
      document.getElementById('subnet-mask').value = generalFormData.subnet_mask;
      document.getElementById('network-address').value = generalFormData.network_address;
      document.getElementById('first-host').value = generalFormData.first_host;
      document.getElementById('last-host').value = generalFormData.last_host;
      document.getElementById('broadcast-address').value = generalFormData.broadcast_address;
      document.getElementById('num-bits-host').value = generalFormData.num_bits_host;
      document.getElementById('num-hosts').value = generalFormData.num_hosts;
   }
}

document.getElementById('reset-btn').addEventListener('click', function () {
   resetForm();
});

function resetForm() {
   document.getElementById('name').value = '';
   document.getElementById('school').value = '';
   document.getElementById('binary-ip').value = '';
   document.getElementById('subnet-mask').value = '';
   document.getElementById('network-address').value = '';
   document.getElementById('first-host').value = '';
   document.getElementById('last-host').value = '';
   document.getElementById('broadcast-address').value = '';
   document.getElementById('num-bits-host').value = '';
   document.getElementById('num-hosts').value = '';

   // Reset nilai-nilai input pada tabel subnet
   const subnetInputs = document.querySelectorAll('#subnet-table input');
   subnetInputs.forEach(input => {
      input.value = '';
   });

   // Hapus data yang disimpan di localStorage
   localStorage.removeItem('formData');
   localStorage.removeItem('generalFormData');
}