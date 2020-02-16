<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FlowerShop.aspx.cs" Inherits="OnlineFlowerShops.FlowerShop" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="FlowerShops.css" type="text/css" />
    <script src="FlowerShopValidation.js">

    </script>
</head>
<body>
    <form id="form1" runat="server">
         <div class="outline">
            <div>
                <header>
                    <h2>FLOWER SHOP ONLINE</h2>
                </header>
            </div>
            <div class="fill"></div>
            <div class="blank">
                <div class="column_design">
                    <asp:Image ImageUrl="~/Images/img.png" runat="server" CssClass="image" />
                </div>

                <div class="column_content">
                    
                    <div>
                        <h2>Secure Payment Page</h2>
                        <table style="table-layout:fixed; width: 100%">
                            <tr>
                                <td style="width:40%">
                                    <a><b>Select Language</b></a>
                                </td>
                                <td>

                                    <asp:DropDownList Width="90%" runat="server">
                                        <asp:ListItem Text="English" Selected="True" />
                                        <asp:ListItem Text="Tamil" />
                                        <asp:ListItem Text="Malayalam" />
                                        <asp:ListItem Text="Hindi" />
                                        <asp:ListItem Text="Arabic" />
                                    </asp:DropDownList>


                                </td>
                            </tr>

                            <tr>
                                <td><a>Payment method</a></td>
                                <td><b>Visa</b></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><b>Item ordered</b></td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td><b>£100.00</b></td>

                                <td>
                                    <asp:Image ImageUrl="~/Images/logo.png" runat="server" Width="50px" Height="50px" /></td>
                            </tr>

                        </table>

                    </div>
                    <div style="float:right;width:13%;margin-top:3%"><asp:Image ImageUrl="~/Images/question.png" runat="server" Width="20px" Height="20px" /></div>

                    <div style="background-color:bisque;width:85%">
                        <h3 class="fills">Card details </h3>
                       
                        <p>You must fill in fields marked with *</p>
                        <table style="table-layout:fixed; width:100%;">
                            <tr>
                                <td style="width:40%">*Card number</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onchange="ValidateCardNumber()" ID="txtCardNumber"  />
                                </td>
                            </tr>
                            <tr>
                                <td>*Security code</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onchange="ValidateSecurityCode()" ID="txtSecurityCode" MaxLength="3" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Expiry date</td>
                                <td ><asp:DropDownList CssClass="monthBox" runat="server" ID="month"></asp:DropDownList> <asp:DropDownList CssClass="YearBox" runat="server" ID="years"></asp:DropDownList></td>
                                
                            </tr>
                            <tr>
                                <td>*Cardholder's name</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onblur="ValidateName()" ID="txtName" />
                                </td>
                            </tr>

                        </table>

                        <h3 class="fills">Cardholder details</h3>
                        <p>You must fill in fields marked with *</p>
                        <table style="table-layout:fixed; width:100%">
                            <tr>
                                <td style="width:40%">*Address 1</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%"  runat="server" onchange="ValidateAddress1()" ID="txtAddress1" /></td>
                            </tr>
                            <tr>
                                <td><a>Address 2</a></td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onchange="ValidateAddress2()" ID="txtAddress2" /></td>
                            </tr>
                            <tr>
                                <td>Address 3</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onchange="ValidateAddress3()" ID="txtAddress3" /></td>
                            </tr>
                            <tr>
                                <td>*Town/City</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onchange="ValidateCity()" ID="txtCity" /></td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td>
                                    <asp:TextBox Height="15px" Width="90%" runat="server" onchange="ValidateRegion()" ID="txtRegion" /></td>
                            </tr>
                            <tr>
                                <td>*Postcode/Zip code</td>
                                <td>
                                    <asp:TextBox Height="10px" Width="60%" runat="server" onchange="ValidatePin()"  ID="txtPostcode" /></td>
                            </tr>
                            <tr>
                                <td>*Country</td>
                                <td>
                                    <asp:DropDownList runat="server" style="width:60%">
                                        <asp:ListItem Text="United Kingdom" />
                                        <asp:ListItem Text="India" />
                                    </asp:DropDownList></td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                <td>
                                    <asp:TextBox Height="10px" Width="90%" runat="server" onchange="ValidatePhone()" ID="txtTelephone" /></td>
                            </tr>
                            <tr>
                                <td>Fax</td>
                                <td>
                                    <asp:TextBox Height="10px" Width="60%" runat="server" ID="txtFax" /></td>
                            </tr>
                            <tr>
                                <td>*Email address</td>
                                <td>
                                    <asp:TextBox Height="10px" Width="90% " runat="server" ID="txtEmail" onchange="ValidateMail()" /></td>
                            </tr>
                            <tr></tr>
                        </table>
                    </div>
                    <div>
                        <table style="table-layout:fixed; width: 100%">
                            <tr>

                                <td>
                                    <asp:ImageButton ImageUrl="~/Images/startAgain.png" onclick="StartAgain" runat="server" Width="10%" Height="4%" />
                                    <input type="button" name="MakePayemnt" value="STARTAGAIN" class="Button"  />
                                </td>
                                <td style="text-align: right">

                                     <input type="button" name="startagain" value="MakePayement" class="Button"  /></td>
                                <td style="width: 18%" onclick="Submit()">
                                    <asp:ImageButton ImageUrl="~/Images/gg.png" runat="server"  Width="45%" Height="45%"  />
                                </td>
                            </tr>
                            <tr>

                                <td colspan="2">
                                    <asp:ImageButton ImageUrl="~/Images/cancel.png" runat="server" onclick="Cancel"  Width="5%" Height="4%" />
                                   <input type="button" name="Cancel" value="Cancel" class="Button"  /></td>
                            </tr>
                        </table>
                    </div>
                    <div id="line" style="background-color: green; height: 2px;"></div>
                    <h2>Refunds and Return</h2>
                    <h5>For more information visit our <a href="Refund abd Returns policy">Refund abd Returns policy</a></h5>
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <asp:Image ImageUrl="~/Images/pay.png" runat="server" Width="150px" Height="60px" />
                                </td>
                                <td>
                                    <h5>For help with your payment visit the <a href="World pay help">WorldPay Help </a></h5>
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                     
                </div>
               

            </div>
             
            <div>
                <footer>
                    <h2>Thank you for shopping at Flowershop. Have a nice day </h2>
                </footer>
                 
            </div>

        </div>
    </form>
</body>
</html>
