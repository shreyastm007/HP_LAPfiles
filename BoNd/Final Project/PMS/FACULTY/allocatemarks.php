<?php
session_start();
$user =  $_SESSION['Email'];
$role = $_SESSION['Role'];


include '../connection.php';
if(isset($_POST['Assign']))
{
           $marks=$_POST['marks'];
           $c=$_POST['student'];
           if (!empty($marks))
           {
              
$sql= "INSERT INTO `pmas`.`alottedmarks` (`s_id`, `marks`) VALUES ('$c', '$marks');";
                mysqli_query($conn, $sql);
                $conn->close();
                header('Location:allocatemarks.php');  
              echo 'marks assigned';
           }
        else
            
        {
              echo 'Please fill up all fields';
              header('Location:allocatemarks.php');
        }  
}
?>


 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <link rel="stylesheet" type="text/css" href="../css.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<style>
	body
	{
		background-image:url(../background.png);
		background-repeat: no-repeat; 
		background-attachment: fixed;
		background-size: 100% 100%;
	}
        a link{
            text-decoration: none;
        }
</style>
<title>Project Management System</title>
</head>
<div>
<body>
    <table width="100%"  border="0"cellspacing="00" cellpadding="00">
  <tr bgcolor="#D2691E">
    <th width="74" scope="col">&nbsp;</th>
    <th width="164" scope="col"><a href="../Admin.php"><img src="../logo1.png" alt="LOGO"/></a></th>
    <th width="646" scope="col"><font size="8" color="White">Project Managenent System</font></th>
    <th width="140" scope="col"><font color="White" size="5">
    <?php
    print $role;
    echo "<br/>";
    print $user;
    ?>
        </font></th>
    <th width="63" scope="col">&nbsp;</th>
  </tr>
    </table>
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr bgcolor="#99CCFF">
      <th width="7%" scope="col"> <h4>&nbsp;</h4></th>
    <th width="15%" scope="col"><a href="skill.php">Skill Matrix</a></th>
    <th width="14%" scope="col"><a href="view.php">View</a></th>
    <th width="15%" scope="col"><a href="mail.php">Mail</a></th>
    <th width="13%" scope="col"><a href="meeting.php">Meeting</a></th>
	<th width="11%" scope="col"><a href="allocatemarks.php">allocatemarks</a></th>
    <th width="15%" scope="col"><a href="../logout.php">Logout</a></th>
    <th width="6%" scope="col">&nbsp;</th>
  </tr>
  </table>
   <form method="post" action="allocatemarks.php">
        <br/><br/>
        <div style="background-color: beige; margin-left: 33%; alignment-adjust: central; width: 35%">
    <table align="center">
        <tr>
            <td><h4>&nbsp;</h4></td>
            <td align="center">
                
    <?php
            include '../connection.php';
             $sql="select s_id from project where f_id='$user';";
             $result=  mysqli_query($conn, $sql)
             ?> <select name="student" style="width: 10em; height: 2em; font-size: 15px;">
                 <option selected="selected">Student List</option>
                 <?php
                 while($row = mysqli_fetch_assoc($result))
                 {
                     $category= $row['s_id'];
				
                     ?>
                 <option  value="<?php echo $category; ?>"><?php echo $category;?></option>


                 <?php
                 }
     ?>
            </select>   &nbsp;&nbsp;&nbsp;


<input id="in" type="text" name="marks" />

            <input style="width: 6em;  height: 2em; font-size: 15px;" type="submit" name="Assign" value="Assign"/>


            </td>
        </tr>

    </table>  
        </div>
         </form>
 