
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, PlusCircle, MinusCircle, Check, X } from "lucide-react";
import type { Application } from './actions';
import Link from 'next/link';
import { format } from 'date-fns';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

type ApplicationListProps = {
  applications: Application[];
};

export function ApplicationList({ applications }: ApplicationListProps) {
  const [openApplicationId, setOpenApplicationId] = useState<string | null>(null);

  if (applications.length === 0) {
    return (
      <div className="text-center bg-card p-12 rounded-lg border border-dashed mt-6">
        <h3 className="font-headline text-xl font-bold">No Applications Yet</h3>
        <p className="text-muted-foreground mt-2">
          When candidates apply for jobs, their applications will appear here.
        </p>
      </div>
    );
  }

  const YesNoIcon = ({ value }: { value: 'Yes' | 'No' }) => {
    if (value === 'Yes') {
      return <Check className="h-5 w-5 text-green-500" />;
    }
    return <X className="h-5 w-5 text-destructive" />;
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Candidate Applications</CardTitle>
        <CardDescription>
          A list of all candidates who have applied for jobs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Candidate</TableHead>
                <TableHead>Applied For</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">CV</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <Collapsible asChild key={app.id} onOpenChange={(isOpen) => setOpenApplicationId(isOpen ? app.id : null)}>
                  <>
                    <TableRow className="hover:bg-muted/50">
                      <TableCell>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="icon">
                            {openApplicationId === app.id ? <MinusCircle className="h-4 w-4" /> : <PlusCircle className="h-4 w-4" />}
                            <span className="sr-only">Toggle details</span>
                          </Button>
                        </CollapsibleTrigger>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-sm text-muted-foreground">{app.email}</div>
                        <div className="text-sm text-muted-foreground">{app.phone}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{app.jobTitle}</Badge>
                      </TableCell>
                      <TableCell>{format(new Date(app.appliedAt), "PPP")}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="outline" size="sm">
                          <Link href={app.cvPath} target="_blank" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <CollapsibleContent asChild>
                      <tr className="bg-muted/20">
                        <td colSpan={5} className="p-0">
                          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                               <div className="flex items-center justify-between">
                                <span className="font-semibold">Right to Work in UK?</span>
                                <YesNoIcon value={app.rightToWork} />
                              </div>
                               <div className="flex items-center justify-between">
                                <span className="font-semibold">Willing to undergo DBS Check?</span>
                                <YesNoIcon value={app.dbsCheck} />
                              </div>
                               <div className="flex items-center justify-between">
                                <span className="font-semibold">Has UK Driving License?</span>
                                <YesNoIcon value={app.drivingLicense} />
                              </div>
                               <div className="flex items-center justify-between">
                                <span className="font-semibold">Notice Period:</span>
                                <span>{app.noticePeriod}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold">Cover Letter</h4>
                                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{app.coverLetter}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </CollapsibleContent>
                  </>
                </Collapsible>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
