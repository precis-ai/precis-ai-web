import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <main className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="w-11/12 md:w-3/4">
          <div className="min-h-screen flex flex-col justify-center p-4 md:p-24">
            <div className="text-4xl md:text-[64px] text-primary font-semibold my-2 md:my-4">
              Precis AI
            </div>

            <div className="text-3xl md:text-[40px] font-semibold my-2 md:my-4">
              Leverage{" "}
              <span className="text-primary underline">
                Large Language Models
              </span>{" "}
              <div className="mt-2 lg:mt-4">
                to automate Social Media Marketing
              </div>
            </div>

            <div className="w-11/12 md:w-3/4 my-4">
              <p>
                By{" "}
                <span className="text-primary font-semibold">
                  <a
                    href="https://www.linkedin.com/in/hongrulin/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Hongru Lin
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/bryancaldera/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Bryan Caldera
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/nihalwashere/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Nihal Kaul
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/pramatha-nadig/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pramatha Nadig
                  </a>
                </span>
              </p>
            </div>

            <div>
              <a
                className="big-button button-link mt-4"
                href="https://app.precisai.net"
                rel="noopener noreferrer"
                target="_blank"
              >
                Try it out
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="hidden fixed bottom-0 left-10 px-12 md:flex flex-col items-center">
          <a
            href="https://github.com/precis-ai"
            className="mb-4 social-transform"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon
              width={24}
              height={24}
              className="text-secondary hover:text-primary cursor-pointer"
            />
          </a>

          <div className="w-[1px] h-20 bg-secondary m-0" />
        </div>

        <div className="flex justify-center items-center md:hidden">
          <div className="flex justify-between w-1/3 my-12">
            <a
              href="https://github.com/precis-ai"
              className="mb-4 social-transform"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon
                width={24}
                height={24}
                className="text-secondary hover:text-primary cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
