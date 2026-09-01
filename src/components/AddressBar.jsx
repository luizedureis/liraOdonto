import { MapPin } from "lucide-react";

function AddressBar() {
  return (
    <div className="w-full min-h-[28px] bg-[#066165] flex items-center justify-center px-3">
      <MapPin className="w-[14px] h-[14px] text-white shrink-0 mr-2" />

      <p className="font-['IBM_Plex_Sans'] text-[12px] font-normal text-white text-center">
        Rua Josefa Taveira, 1327, loja 102, Mangabeira, João Pessoa - PB
      </p>
    </div>
  );
}

export default AddressBar;