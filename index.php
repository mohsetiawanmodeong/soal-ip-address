<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="assets/css/bootstrap.min.css">
   <link rel="stylesheet" href="assets/css/all.min.css">
   <link rel="stylesheet" href="assets/css/style.css">
   <link rel="icon" type="image/png" href="assets/img/ipv4-light.png">
   <title>IP Address Practice</title>
</head>

<body>
   <div class="container">
      <div class="d-flex justify-content-between align-items-center">
         <img src="assets/img/trakindo-logo.png" alt="Logo" style="height: 80px;">
         <div>
            <button id="refresh-btn" class="btn btn-secondary mb-3 mr-1"><i class="fas fa-sync"></i></button>
            <button id="fullscreen-btn" class="btn btn-secondary mb-3"><i class="fas fa-expand"></i></button>
         </div>
      </div>
      <h4 class="text-center font-weight-bold">IPv4 Address Practice for PKL Student</h4>
      <h5 class="text-center font-weight-bold">by IT Trakindo Tembagapura Division</h5>
      <div class="text-center">
         <button id="generate-ip-btn" class="btn btn-primary mb-3">Generate Random IP</button>
      </div>
      <div id="ip-display" class="text-center font-weight-bold"></div>
      <div id="timer" class="text-center font-weight-bold"></div>
      <form id="practice-form">
         <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="school">School:</label>
            <input type="text" id="school" name="school" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="binary-ip">1. IP Address (Binary):</label>
            <input type="text" id="binary-ip" name="binary_ip" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="subnet-mask">2. Subnet Mask (Binary):</label>
            <input type="text" id="subnet-mask" name="subnet_mask" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="network-address">3. Network Address:</label>
            <input type="text" id="network-address" name="network_address" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="first-host">4. First IP Host Address:</label>
            <input type="text" id="first-host" name="first_host" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="last-host">5. Last IP Host Address:</label>
            <input type="text" id="last-host" name="last_host" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="broadcast-address">6. Broadcast Address:</label>
            <input type="text" id="broadcast-address" name="broadcast_address" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="num-bits-host">7. Number of Bits for Host:</label>
            <input type="text" id="num-bits-host" name="num_bits_host" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="form-group">
            <label for="num-hosts">8. Number of Hosts:</label>
            <input type="text" id="num-hosts" name="num_hosts" class="form-control font-weight-bold" autocomplete="off">
         </div>
         <div class="text-center mb-5">
            <button type="button" id="reset-all-btn" class="btn btn-danger mr-3"><i class="fas fa-trash"></i> Reset All</button>
            <button type="button" id="reset-btn" class="btn btn-secondary mr-3"><i class="fas fa-undo"></i> Reset</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Grade</button>
         </div>
         <footer class="text-center">
            <p>Jika semua nilai grade <b>100</b>, silahkan screenshot hasilnya dan kirim ke email: <a href="mailto:m.setiawan.modeong@trakindo.co.id?subject=Hasil%20Grade%20IP%20Address&body=Berikut%20screenshot%20hasil%20grade%20IP%20Address%20saya.">m.setiawan.modeong@trakindo.co.id</a></p>
            <p style="font-size: small;">Copyright &copy; 2024, Instructor: Moh. Setiawan Modeong</p>
         </footer>
      </form>
   </div>

   <!-- Modal -->
   <div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="resultModalLabel">Result: <span id="modal-timer" class="font-weight-bold"></span></h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div id="results"></div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Close</button>
            </div>
         </div>
      </div>
   </div>

   <script src="assets/js/jquery.min.js"></script>
   <script src="assets/js/popper.min.js"></script>
   <script src="assets/js/bootstrap.min.js"></script>
   <script src="assets/js/script.js"></script>
</body>

</html>