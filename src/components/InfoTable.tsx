import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

export const InfoTable = () => {
  const tableData = [
    { category: "Platform Name", details: "RAJA LUCK Game App" },
    { category: "Raja Game Register app", details: "Click here", link: "http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" },
    { category: "Rajagame Invite Code", details: "jQQCz53181" },
    { category: "Raja Game Free Gift Code", details: "Click here", link: "http://jqqcz53181.myrajalucks.com/#/register?invitationCode=jQQCz53181" },
    { category: "Welcome Bonus", details: "₹300" },
    { category: "Platform Type", details: "Online Gaming" },
    { category: "Availability", details: "Android, iOS, Web" },
    { category: "Minimum Deposit", details: "₹100" },
    { category: "Withdrawal Time", details: "Within 24 Hours" },
    { category: "Support Options", details: "Live Chat, WhatsApp" },
    { category: "Payment Methods", details: "UPI, Paytm, Bank Transfer" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-elegant border-2 border-secondary/10">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-primary border-b-2 border-secondary/20">
                <TableHead className="text-primary-foreground font-bold text-base">Category</TableHead>
                <TableHead className="text-primary-foreground font-bold text-base">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow 
                  key={index}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium">{row.category}</TableCell>
                  <TableCell>
                    {row.link ? (
                      <a 
                        href={row.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent font-semibold underline"
                      >
                        {row.details}
                      </a>
                    ) : (
                      <span className={row.category === "Welcome Bonus" ? "text-secondary font-bold text-lg" : ""}>
                        {row.details}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};
