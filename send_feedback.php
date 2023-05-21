<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $feedback = $_POST["feedback"];
  $to = "YOUREMAIL"; // Replace with your desired email address
  $subject = "Feedback from Contact Form";
  $headers = "From: webmaster@example.com"; // Replace with your website's email or set to the user's input

  // Send email
  $success = mail($to, $subject, $feedback, $headers);

  if ($success) {
    echo "Feedback sent successfully!";
  } else {
    echo "Sorry, there was an error sending the feedback.";
  }
} else {
  echo "Invalid request.";
}
?>
