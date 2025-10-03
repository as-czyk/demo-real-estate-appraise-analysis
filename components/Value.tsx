import Image from "next/image";
import { Card } from "@/components/ui/card";
import { AlertCircle, ArrowUpRight, Clock, TrendingDown } from "lucide-react";
import { CustomerData } from "@/lib/constant";
import Link from "next/link";
import { Button } from "./ui/button";
import { routes } from "@/lib/routes";

export function Value() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header with Logos and Names */}
        <div className="flex items-start justify-between">
          {/* Client Side */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-border">
              <Image
                src={"/profile" + CustomerData.profileLogo}
                alt="Client Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">
                {CustomerData.firstName} {CustomerData.lastName}
              </p>
              <div className="mt-1 h-8 w-32 relative">
                <Image
                  src={"/company" + CustomerData.companyLogo}
                  alt="Client Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Provider Side */}
          <div className="text-right">
            <p className="text-lg font-semibold">Aron Scheffczyk</p>
            <div className="mt-1 h-8 w-32 relative ml-auto">
              <Image
                src="/logo_agentenschmiede.png"
                alt="Provider Logo"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>

        {/* Main Value Statement */}
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Herausforderungen in der manuellen Gutachtenprüfung
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Die traditionelle Prüfung von Immobiliengutachten steht vor
            erheblichen Herausforderungen
          </p>
        </div>

        {/* Value Statement Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Zeit- & Personalintensiv */}
          <Card className="p-6 space-y-4 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500/10 p-3">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-semibold">
                Zeit- & Personalintensiv
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-orange-500 mt-0.5">•</span>
                <span>
                  Jede Prüfung benötigt hochqualifizierte Gutachter (1–2
                  Reviewer pro Gutachten)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-500 mt-0.5">•</span>
                <span>
                  Engpässe durch Fachkräftemangel: Kapazität begrenzt,
                  Skalierung kaum möglich
                </span>
              </li>
            </ul>
          </Card>

          {/* Fehleranfällig & aufwendig */}
          <Card className="p-6 space-y-4 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-500/10 p-3">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-xl font-semibold">
                Fehleranfällig & aufwendig
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>
                  Wiederholte Korrekturschleifen (z. B. Tippfehler, falsche
                  Heizungsart)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Widersprüche zwischen Seiten (Cross-Checks nötig)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>
                  Teure Folgefehler: Bewertungsabweichungen im sechsstelligen
                  Bereich
                </span>
              </li>
            </ul>
          </Card>

          {/* Ineffiziente Prozesse */}
          <Card className="p-6 space-y-4 border-2 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-yellow-500/10 p-3">
                <TrendingDown className="h-6 w-6 text-yellow-500" />
              </div>
              <h2 className="text-xl font-semibold">Ineffiziente Prozesse</h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-yellow-500 mt-0.5">•</span>
                <span>
                  Manuelle Prüfungen (Stempel, Unterschriften, Gutachtenart)
                  binden Ressourcen
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500 mt-0.5">•</span>
                <span>
                  Hohe Abhängigkeit von individuellen Gutachtern (Qualität
                  schwankt)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500 mt-0.5">•</span>
                <span>
                  Regelmäßiges Neudrucken/Überarbeiten führt zu Zeit- und
                  Kostenverlusten
                </span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="text-center py-8">
          <Link href={routes.dashboard} className="w-full mx-auto">
            <Button>
              KI gestützte Analyse von Immobiliengutachten
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
