<?php
// form-handler.php

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $areaInterest = $_POST["areaInterest"];
    $motivation = $_POST["motivation"];

    // Process the data (you can save it to a database or perform other actions)

    // Forward the data to Formspree using cURL
    $url = "https://formspree.io/f/mrgwponn";
    $data = array(
        "fullName" => $fullName,
        "email" => $email,
        "phone" => $phone,
        "areaInterest" => $areaInterest,
        "motivation" => $motivation
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);

    if ($response === false) {
        // Error handling
        echo "Form submission failed: " . curl_error($ch);
    } else {
        // Successful submission handling
        echo "Form submitted successfully";
    }

    curl_close($ch);
} else {
    // Redirect back to the form if accessed directly
    header("Location: REG-form.html");
    exit();
}
?>
