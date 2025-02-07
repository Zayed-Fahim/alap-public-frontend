import { Button, HeadingTitle, Input, Text } from '@/components/ui';
import { Photo } from '@/constants';

export const ThemePreview = () => {
  return (
    <div>
      <HeadingTitle
        title="Theme Preview"
        align="left"
        titleColor="text-primary-text"
        titleSize="sm"
        className="pb-3"
      />
      <div className="flex p-4 flex-col justify-between w-full border-primary-border border rounded-xl h-[65vh]">
        <div className="rounded-lg w-full">
          {/* User Messages */}
          <div className="flex flex-col items-end space-y-2">
            <div className="bg-primary text-optional-text px-3 py-2 rounded-lg max-w-[75%] text-sm">
              <Text
                text="There are many themes to choose from, and they’re all a little
            different."
              />
            </div>
            <div className="bg-primary text-optional-text px-3 py-2 rounded-lg max-w-[75%] text-sm">
              <Text text="You’ll see the messages you send to other people in this colour.." />
            </div>
          </div>

          {/* Timestamp */}
          <div className="text-center text-secondary-text text-xs my-2">
            <Text text="2/15/19, 2:41 AM" className="text-end" />
          </div>

          {/* Friend's Message */}
          <div className="flex flex-col items-start space-y-2">
            <div className="bg-gray-600 text-white px-3 py-2 rounded-lg max-w-[75%] text-sm">
              <Text text="And messages from your friends will look like this" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col h-12 flex-1">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <Input
                autoComplete="off"
                id="message"
                name="message"
                type="text"
                placeholder="Aa"
                className="rounded-r-none border-r-0 w-full h-12"
              />
              <div className="flex border-none bg-secondary items-center justify-center pr-1 rounded-r-xl border-l-0 ">
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex items-center gap-1">
                    <button className="flex items-center justify-center p-1.5">
                      <div
                        className="text-[#637588]"
                        data-icon="Image"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <Photo className="size-5" />
                      </div>
                    </button>
                  </div>
                  <Button variant="primary" className="h-10 rounded-xl">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
