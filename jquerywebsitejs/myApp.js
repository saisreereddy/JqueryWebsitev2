$(document).ready(function() {

    $('#maincontainer').hide();
    $('.card').hide();
var btnContainer = document.getElementById("data");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("cursor_pointer");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


    var userFacebookToken = 'EAACEdEose0cBAPEeCd2r42MqILQeguM1raBEh6sZAzrYvlSM3bqfXo2MRQqpLSiiCQqCKBUfxNXIhV3liJb9da4LGMat8wM1VQ0ZB5R5VuLP1y36cWaeeYOdAei9b1TKZBYskayjKYHV4ETBhQsZC0upz3PxkpZAL42FeZBxAZBW2G4NjczXcFKhmzFwKaMJT2WOpkz0aDg6gZDZD';

    function getFacebookInfo() {

$('#firstdisplay').hide();
$('#seconddisplay').show();


        $.ajax('https://graph.facebook.com/me?fields=id,name,picture,birthday,hometown,gender,email,feed.include_hidden(true).limit(20),location,education.include_hidden(true).limit(5),work.include_hidden(true).limit(5)&access_token=' + userFacebookToken, {
                success: function(response) {
                    console.log(response);
                    $("#myFirstName").text(response.first_name);
                    $("#myLastName").text(response.last_name);
                     $("#myFbName").text(response.name);
                    $("#myFbName2").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myLocation").text(response.location.name);
                    $("#myGender").text(response.gender);
                       $("#Birthday").text(response.birthday);
                       $('#pic_text').text("\"Everyone pities the weak,jealousy is something you should earn \"");
                $("#pic_text2").text("\"Want to know more about me,please visit the profile page to see my details and also the feeds page to see the recent posts made by me\"");
                    $("#myProfilePic").html('<img src="https://graph.facebook.com/' + response.id + '/picture"  />');
                    $("#myProfilePicLarge").html('<img src="https://graph.facebook.com/' + response.id + '/picture?type=large"  id="myDpx"/>');
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/' + response.id + '">https://facebook.com/' + response.id + '</a>');

















var jEduData = response.education;
                    var html = "";
                    html += "<div class='fbEdu'>" + "<ul class='padding-left-zero'>";
                    $.each(jEduData, function(index, value) {
                        if (value.id != undefined) {
                            html += "<li>" + "<div class='row'>";
                          
                        
                            html += '<div class="col-md-12">';
                           
                            if (response.education[index].type!= undefined) {
                                html += '<p class="message col-md-6">' + value.type + '</p>';
                            }
                           
                            
                            if (response.education[index].school.name != undefined) {
                                html += '<p class="message"col-md-6>' + value.school.name + '</p>';
                            }

                            html += ' </div>' + '</div>' + "</li>";
                        }
                    });
                    html += "</ul>" + "</div>";
                    $(".fbEdu").append(html);




var jWorkData = response.work;
                    var html = "";
                    html += "<div class='fbWork'>" + "<ul class='padding-left-zero'>";
                    $.each(jWorkData, function(index, value) {
                        if (value.id != undefined) {
                            html += "<li>" + "<div class='row'>";
                          
                        
                            html += '<div class="col-md-12">';
                           
                            if (response.work[index].employer.name!= undefined) {
                                html += '<p class="message col-md-6">' + value.employer.name + '</p>';
                            }
                           
                            
                            if (response.work[index].start_date != undefined) {
                                html += '<p class="message"col-md-6>' + value.start_date + '</p>';
                            }

                            html += ' </div>' + '</div>' + "</li>";
                        }
                    });
                    html += "</ul>" + "</div>";
                    $(".fbWork").append(html);



























                    var jData = response.feed.data;
                    var html = "";
                    html += "<div class='fbFeed'>" + "<ul>";
                    $.each(jData, function(index, value) {
                        if (value.id != undefined) {
                            html += "<li>" + "<div class='row'>";
                            html += '<div class="col-md-4">' + '<img src="https://graph.facebook.com/' + response.id + '/picture" class="avatar" />';
                            html += "<h3>" + '<a target="blank" href="https://facebook.com/' + response.id + '">' + response.name + '</a>' + "</h3>" + '</div>';
                            html += '<div class="col-md-8">';
                            if (response.feed.data[index].img != undefined && response.feed.data[index].type != "link") {
                                html += '<img src="' + response.feed.data[index].img + '" class="postPic" />';
                            }
                            if (response.feed.data[index].message != undefined) {
                                html += '<p class="message">' + value.message + '</p>';
                            }
                            if (response.feed.data[index].link != undefined && response.feed.data[index].name != undefined) {
                                html += '<a target="blank" href="' + response.feed.data[index].link + '">' + response.feed.data[index].name + '</a>';
                            }
                             if (response.feed.data[index].story != undefined) {
                                html += '<p class="message">' + value.story + '</p>';
                            }
                             if (response.feed.data[index].created_time!= undefined) {
                                html += '<p class="message">' + value.created_time + '</p>';
                            }

                            html += ' </div>' + '</div>' + "</li><hr>";
                        }
                    });
                    html += "</ul>" + "</div>";
                    $(".fbFeed").append(html);

                },
                error: function(request, errorType, errorMessage) {
                    console.log(request);
                    console.log(errorType);
                    alert(errorType, errorMessage)
                },
                timeout: 3000,
                beforeSend: function() {
                    $('#maincontainer').hide();
                    $('.card').hide();
                     


                },
                complete: function() {
                    $('#maincontainer').show();
                    $('.card').show();
                   
                       $('#eduacation_details_content').hide();
                       $('#work_details_content').hide();







                }
            } //end argument list



        ); // end ajax call


    } // end get facebook info

     function getFacebookInfoEdcationDetails() {
$('#eduacation_details_content').show();



     }
 
        function getFacebookInfoWorkHistory() {
$('#work_details_content').show();



     }

    $("#facebookBtn").on('click', getFacebookInfo)


   
 $("#eduacation_details").on('click', getFacebookInfoEdcationDetails)
 $("#work_details").on('click', getFacebookInfoWorkHistory)



});
