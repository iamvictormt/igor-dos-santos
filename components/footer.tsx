export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        

        {/* Bottom bar */}
        <div className="border-t border-gray-100 py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Igor dos Santos. Todos os direitos reservados.</p>
            {/* <p className="text-gray-400 text-xs">Desenvolvido com paixão pela música</p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
