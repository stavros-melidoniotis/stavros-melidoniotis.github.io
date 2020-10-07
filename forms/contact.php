<?php

  if(isset($_POST['submit'])){
    $to = "melidon.stavros@gmail.com";
    $from = $_POST['email'];
    $first_name = $_POST['name'];
    $subject = $_POST['subject'];
    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
  }

?>
