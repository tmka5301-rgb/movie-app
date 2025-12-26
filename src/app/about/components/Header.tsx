import { ArrowUpIcon, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export const Header = () => {
  return (
    <div className="flex bg-white justify-between pl-10 pr-10 text-black pt-2 pb-2 w-360 ">
      <div className="font-bold text-base text-indigo-700 gap-2 flex">
        <img
          className="h-6 w-6 flex text-center"
          src="./Vector (2).png"
          alt=""
        />
        Movie Z
      </div>
      <div className="flex gap-3">
        <ButtonGroup>
          <Button>Genre</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <button>
        <img src="./Vector (1).png" alt="" />
      </button>
    </div>
  );
};
