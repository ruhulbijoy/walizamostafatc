import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const GalleryLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: GalleryLightboxProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-gold/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm flex items-center justify-center transition-all"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center justify-center w-full h-full p-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
