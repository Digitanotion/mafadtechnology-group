import Container from "@/components/ui/Container";
import { Shield, Award, CheckCircle, TrendingUp } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Fully Registered",
    description: "CAC Nigeria & Companies House UK",
    color: "text-mafad-cyan",
  },
  {
    icon: Award,
    title: "Authorized Partner",
    description: "Coca-Cola HBC Sub-dealer",
    color: "text-mafad-cyan",
  },
  {
    icon: CheckCircle,
    title: "Compliant",
    description: "BOI, NIRSAL, SMEDAN Ready",
    color: "text-mafad-cyan",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "₦160M 5-Year Projection",
    color: "text-mafad-cyan",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`${item.color} bg-mafad-cyan/10 p-2 rounded-lg`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-mafad-navy text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
