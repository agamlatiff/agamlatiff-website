
export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  deliverables: string[];
  timeline: string;
  priceRange?: string;
  icon: 'code' | 'layout' | 'smartphone' | 'consulting';
  modalContent: {
    title: string;
    description: string;
    points: {
      title: string;
      desc: string;
    }[];
  };
}
