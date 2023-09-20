var fullname = document.getElementById("fullname");
var dob = document.getElementById("date");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var add = document.getElementById("add");
var des = document.getElementById("des");
var fb = document.getElementById("fb");
var ln = document.getElementById("ln");
var gh = document.getElementById("gh");
var ol = document.getElementById("ol");
var pr = document.getElementById("pr");
var we = document.getElementById("we");
var ssc = document.getElementById("ssc");
var sscboard = document.getElementById("sscboard");
var hsc = document.getElementById("hsc");
var hscboard = document.getElementById("hscboard");
var degree = document.getElementById("degree");
var pg = document.getElementById("pg");
var pgboard = document.getElementById("pgboard");
var skills = document.getElementById("skills");
var hobint  = document.getElementById("hobint");
var cres  = document.getElementById("cres");
var achi  = document.getElementById("achi");
function download() {
var doc = new jsPDF({
  orientation: 'p',
  format: 'a4',
  });
  doc.setFontSize(24);
  doc.setFontType("bold");  
  doc.text(90, 20, 'Resume');
   doc.setFontSize(16);
   doc.setFontType("normal");
   doc.text(20, 40, 'Name : '+ fullname.value);
    doc.text(20, 50, 'Date of birth : '+date.value);
    doc.text(20, 60, 'Contact : '+phone.value);
    doc.text(20, 70, 'Email ID : '+email.value);
    doc.line(10, 80, 200, 80)
    doc.setFontType("bold");
   doc.text(20, 90, 'Career Objective');
    doc.setFontType("normal");
doc.text(20, 100, 'To make a career with an esteemed organization by contributing\r\n my hard work to achieve its goals and objective.');
  doc.line(10, 110, 200, 110) 
    doc.setFontSize(20);  
    doc.setFontType("bold");  
    doc.text(20, 130, 'Educational qualification');
    doc.setFontSize(16);    
    doc.setFontType("normal");  
    doc.text(20, 140, ''+ssc.value);
    doc.text(20, 150, ''+hsc.value);
    doc.text(20, 160, ''+degree.value);
    doc.text(20, 170, ''+pg.value);
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.text(20, 180, 'Projects Done');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(20, 190, ''+pr.value);
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.text(20, 220, 'Work Experience');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(20, 230, ''+we.value);
    doc.text(10, 287, 'I genuinely declare that all the facts mentioned above are true to \r\n my faith, andI am answerable for its accuracy.')
  doc.save('document.pdf');
}
function download3() {
var doc = new jsPDF({
    orientation: 'p',
    format: 'a4',
//210 x 297mm	
});
doc.setDrawColor(2,65,234) 
doc.setLineWidth(5)
doc.line(0, 0, 217, 0) // horizontal line
doc.setFont('courier')
doc.setFontType("bold");
doc.setFontSize(40);
doc.text(5,27,""+ fullname.value);
doc.setDrawColor(2,65,234) 
doc.setFontSize(16);
doc.setLineWidth(0.1)
doc.line(0, 45, 217, 45) // horizontal line
doc.setFontType("normal");
doc.text(5, 40, 'CONTACT : '+ phone.value);
doc.text(80, 40, 'EMAIL ID : '+email.value); 
doc.setFontSize(20);  
doc.setFontType("bold");  
doc.text(10, 55, 'Education qualification');
doc.setFontSize(16);    
doc.setFontType("normal");  
doc.text(20, 65, ''+ssc.value);
doc.text(20, 75, ''+hsc.value);
doc.text(20, 85, ''+degree.value);
doc.text(20, 95, ''+pg.value);
doc.setFontSize(20);
doc.setFontType("bold");
    doc.text(10, 105, 'Projects Done');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(10, 115, ''+pr.value );
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.text(10, 150, 'Work Experience');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(10, 160, ''+we.value);
    doc.setFontSize(20);
    doc.setFontType("bold");
    doc.text(10, 195, 'Achievements');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(10, 205, ''+achi.value);
    doc.setFontSize(14);
doc.text(10, 287, 'I genuinely declare that all the facts mentioned above are true to \r\n my faith, andI am answerable for its accuracy.')
doc.save('document.pdf');
}
function download2() {
var doc = new jsPDF({
    orientation: 'p',
    format: 'a4',
});
doc.setFont('verdana')
doc.setFontSize(30);
doc.setFontType("bold");
doc.text(90, 15, 'Resume');
doc.line(10, 20, 200, 20) // horizontal line
doc.setFont('times')
doc.setTextColor(0, 0, 0);
doc.setFontSize(16);
doc.setFontType("normal");
doc.text(20, 30, 'Name : '+ fullname.value);
doc.text(100, 30, 'Contact : '+ phone.value);
doc.text(20, 40, 'Email Id : '+ email.value);
doc.line(10, 50, 200, 50) // horizontal line
doc.setFontType("bold");
doc.text(20, 60, 'Career Objective');
doc.setFontType("normal");
doc.text(20, 70, 'To make a career with an esteemed organization by contributing my hard work \r\nto achieve its goals and objective.');
doc.line(10, 85, 200, 85) // horizontal line 
doc.setFontType("bold");  
  doc.text(20, 95, 'Educational qualification');
  doc.setFontSize(16);    
  doc.setFontType("normal");  
  doc.text(20, 105, ''+ssc.value);
  doc.text(20, 115, ''+hsc.value);
  doc.text(20, 125, ''+degree.value);
  doc.text(20, 135, ''+pg.value);
  doc.setFontType("bold");
    doc.text(20, 145, 'Projects Done');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(20, 155, ''+pr.value);
    doc.setFontType("bold");
    doc.text(20, 185, 'Work Experience');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(20, 195, ''+we.value);
    doc.setFontType("bold");
    doc.text(20, 230, 'Achievements');
    doc.setFontSize(16); 
    doc.setFontType("normal"); 
    doc.text(20, 240, ''+achi.value);
  doc.text(10, 287, 'I genuinely declare that all the facts mentioned above are true to\r\n my faith, and I am answerable for its accuracy.')
doc.save('document.pdf');
}
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
function updatePreview() {
        // Fetch user input data and generate the previewed resume content
        var preview = document.getElementById("resume-preview");
        var previewContent = "";
        preview.style.fontSize="20px";
        
 previewContent += "<p>Name: " + fullname.value + "</p>";
 previewContent += "<p>Date of Birth: " + date.value + "</p>";
 previewContent += "<p>Contact: " + phone.value + "</p>";
 previewContent += "<p>Email: " + email.value + "</p>";
 previewContent += "<p>Address: " + add.value + "</p>";
 previewContent += "<p>Description: " + des.value + "</p>";
 previewContent += "<p>Facebook link: " + fb.value + "</p>";
 previewContent += "<p>LinkedIn link: " + ln.value + "</p>";
 previewContent += "<hp>Github link: " + gh.value + "</p>";
 previewContent += "<p>Other links: " + ol.value + "</p>";
 previewContent += "<p>Projects : " + pr.value + "</p>";
 previewContent += "<p>We : " + we.value + "</p>";
 previewContent += "<p>SSC: " + ssc.value + "</p>";
 previewContent += "<p>SSCBoard: " + sscboard.value + "</p>";
 previewContent += "<p>HSC: " + hsc.value + "</p>";
 previewContent += "<p>HSCBoard: " + hscboard.value + "</p>";
 previewContent += "<p>Degree: " + degree.value + "</p>";
 previewContent += "<p>PG: " + pg.value + "</p>";
 previewContent += "<p>PGBoard: " + pgboard.value + "</p>";
 previewContent += "<p>skills: " + skills.value + "</p>";
 previewContent += "<p>Hobbies/Interests: " + hobint.value + "</p>";
 previewContent += "<p>Courses Completed: " + cres.value + "</p>";
 previewContent += "<p>Achievements: " + achi.value + "</p>";
  preview.innerHTML = previewContent;
}
var previewButton = document.getElementById("preview-button");
    previewButton.addEventListener("click", updatePreview);
document.getElementById("preview-button").addEventListener("click", function() {
      window.scrollTo(0, window.scrollY + 1000); // Adjust the value (100) as needed
  });
  