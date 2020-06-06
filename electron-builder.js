module.exports = {
  appId: "pw.electron.android-messages",
  productName: "AndroidMessages",
  copyright: "Copyright who needs those",
  files: ["app/**/*", "resources/**/*"],
  directories: {
    buildResources: "resources",
    output: "dist",
  },
  linux: {
    target: ["AppImage", "snap", "pacman", "deb", "rpm", "freebsd", "zip"],
    executableName: "AndroidMessages",
    category: "Internet",
  },
  win: {
    target: [
      {
        target: "nsis",
        arch: ["x64", "ia32"],
      },
      {
        target: "portable",
        arch: ["x64", "ia32"],
      },
    ],
  },
  portable: {
    artifactName: "${productName}-portable-${version}.${ext}",
  },
};
