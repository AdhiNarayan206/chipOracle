import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the chip count?",
    answer: "Our AI is highly accurate, but sometimes it likes to have a little fun. Consider it part of the trolling experience.",
  },
  {
    question: "Will my photo be shared?",
    answer: "We respect your privacy. Your photos are only used for the chip count and are not shared publicly without your permission.",
  },
  {
    question: "What if I get zero chips?",
    answer: "Then you've been officially trolled by the universe (and us). Share your result for maximum sympathy... or laughs.",
  },
];

export const Faq = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-secondary rounded-lg border-none">
              <AccordionTrigger className="font-medium hover:no-underline px-6 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};