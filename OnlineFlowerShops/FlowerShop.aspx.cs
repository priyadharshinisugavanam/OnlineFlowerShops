using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace OnlineFlowerShops
{
    public partial class FlowerShop : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var months = CultureInfo.CurrentCulture.DateTimeFormat.MonthNames;
            for (int i = 1; i <=12; i++)
            {
                month.Items.Add(new ListItem(i.ToString(),i.ToString()));
            }
            int year = DateTime.Now.Year;
            for (int i = year - 5; i <= year + 5; i++)
            {
                ListItem li = new ListItem(i.ToString());
                years.Items.Add(li);
            }
            years.Items.FindByText(year.ToString()).Selected = true;
        }
        protected void StartAgain(object sender, EventArgs e)
        {
            Response.Redirect("FlowerShop.aspx");
        }
        protected void Payment(object sender, EventArgs e)
        {
            Response.Redirect("Payment.aspx");
        }
        protected void Cancel(object sender, EventArgs e)
        {
            Response.Redirect("Cancel.aspx");
        }
    }
}