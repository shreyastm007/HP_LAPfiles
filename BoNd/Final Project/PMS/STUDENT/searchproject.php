<?php
session_start();
$user =  $_SESSION['Email'];
$role = $_SESSION['Role'];

include '../connection.php';

if(isset($_POST['allocate']))
        {
           $id=$user;  
        $n=$_POST["projectname"];
	$sql = "UPDATE `pmas`.`project` SET name = $n WHERE s_id='$id';";
	

               mysqli_query($conn, $sql);
		echo "<script>alert('project added sucessfully ');</script>";
                $conn->close();
                header('Location:searchproject.php');  
                  
        }




if(empty($_SESSION['Email']))
{
header("location:index.php");
}
else
{
if($role=="Admin")
{
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
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

 <?php
 header('Location:../Admin.php');
}
elseif($role=="Faculty")    
{
    header('Location:../Admin.php');
?>
    
 <?php
}
else   
{
?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
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
    <th width="646" scope="col"><font size="8" color="White">Project Management System</font></th>
    <th width="140" scope="col"><font color="White" size="5">
	<?php
    print $role;
    echo "<br/>";
    print $user;
    ?></font></th>
    <th width="63" scope="col">&nbsp;</th>
  </tr>
    </table>
  <table width="100%" border="0" cellspacing="00" cellpadding="00">
      <tr bgcolor="#99CCFF">
 <th width="7%" scope="col"><h4>&nbsp;</h4></th>
    <th width="13%" scope="col"><a href="searchproject.php">Search Project</a></th>
          <th width="7%" scope="col"><h4>&nbsp;</h4></th>
          <th width="13%" scope="col"><a href="project.php">Project</a></th>
    <th width="12%" scope="col">&nbsp;</th>
    <th width="13%" scope="col"><a href="skill.php">View Skill Matrix</a></th>
    <th width="11%" scope="col">&nbsp;</th>
    <th width="13%" scope="col"><a href="mail.php">Mail</a></th>
    <th width="12%" scope="col">&nbsp;</th>
    <th width="13%" scope="col"><a href="../logout.php">Logout</a></th>
    <th width="6%" scope="col">&nbsp;</th>
  </tr>
<?php
}
?>
</table>
<p>
  <?php
}
?>
    
    
    <div style="background-color: #D2691E; width: 50%; margin-left: 25%; margin-top: 0px; ">
        <br/><br/>
    <form method="post" action="searchproject.php">
        <table align="center" bgcolor="beige" width="30%">
        <tr>
            
            <td align="center">
              <br/><br/>  
  
            </select>  <br/><br/>
Project Name: <input type="text" name="projectname"><br>
        <input type="submit" name="asses" value="search"/><br/><br/>
            </td>
            
        </tr>
    </table>    
         </form>
    
    
    
    <br/><br/><br/>
    
    
    
    
    <form method="post" action="searchproject.php">
       <div style="background-color: beige; width: 60%; margin-left: 20%;"> 
    <table width="50%" cellpadding="5" cellspacing="5" border="0" align="center">
    <?php
            if (isset($_POST['asses']))
            {  
		if(empty($_POST['projectname']))
		{
			echo "<script>alert('enter project name ');document.location='searchproject.php'</script>";
			 
		}
		else
		{ 
                $fid=$user; 
		$n=$_POST["projectname"];
		
		    
                echo "<tr>";?>
                <?php
                echo "</tr>";
                
                $sql1="SELECT  * FROM project WHERE name='$n' ;";
                $rec=mysqli_query($conn, $sql1);
		$count = mysqli_num_rows($rec);

		if($count > 0)
		{
		echo "<tr>";
                echo "<td>"."List of Duplicate project"."</td>";
		echo "<script>alert('Duplicate project ');</script>";
		
             	   while($std= mysqli_fetch_assoc($rec))
             	   {
                
               		 echo "<td>"?> <input type="text" name="stid" readonly value="<?php echo $std['name'];?>"/> <?php "</td>";
              		  echo "</tr>";
               
		
             	   }
		}
		else if($count == 0)
		{
		echo "<script>alert('Project not found, You can upload project document');</script>";
		echo "<td></td>";

		$sql11 = "UPDATE `pmas`.`project` SET name = '$n' WHERE s_id='$user';";
	         mysqli_query($conn, $sql11);
		echo "<script>alert('project added sucessfully ');</script>";
                $conn->close();
		
               }
                
                
       		}         
               
            }
    ?>
                
    </table>
        </div>
    </form>
    <br/><br/><br/>
    </div>