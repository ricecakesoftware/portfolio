import { DesktopWindows, DeveloperBoard, Web } from "@mui/icons-material";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import Work from "./Work";

export default function Works() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>Works</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm' sx={{ py: 2 }}>
        <Stack direction='column' spacing={2}>
          <Work icon={<DesktopWindows />}
                name='薬品管理システム開発'
                scale='3名'
                roll='メンバー'
                phase='要件定義～システムテスト'
                environment="Windows / VisualStudio2022" />
          <Work icon={<Web />}
                name='畜産向け見守りシステム開発'
                scale='4名'
                roll='メンバー'
                phase='要件定義～システムテスト'
                environment="Windows, Ubuntu, CentOS / VisualStudio2022, VirualBox, Miniconda" />
          <Work icon={<Web />}
                name='地域医療連携システム開発'
                scale='7名'
                roll='メンバー'
                phase='要件定義～システムテスト'
                environment="Windows / Eclipse" />
          <Work icon={<DesktopWindows />}
                name='配車・倉庫業務システム開発'
                scale='5名'
                roll='リーダー'
                phase='基本設計～システムテスト'
                environment="Windows / VisualStudio2013" />
          <Work icon={<Web />}
                name='校務支援システム開発'
                scale='7名'
                roll='メンバー'
                phase='基本設計～システムテスト'
                environment="Windows / Eclipse" />
          <Work icon={<Web />}
                name='次期融資支援システム開発'
                scale='30名'
                roll='メンバー'
                phase='詳細設計～システムテスト'
                environment="Windows / VisualStudio2012" />
          <Work icon={<DesktopWindows />}
                name='空調統合アプリケーション開発'
                scale='4名'
                roll='サブリーダー'
                phase='基本設計～システムテスト'
                environment="Windows / VisualBasic6.0, VisualStudio2008" />
          <Work icon={<DeveloperBoard />}
                name='総合音声通信装置(交換装置)開発'
                scale='2名'
                roll='メンバー'
                phase='基本設計～システムテスト'
                environment="vxWorks(PowerPC) / Eclipse" />
          <Work icon={<DeveloperBoard />}
                name='電子棚板システム開発'
                scale='3名'
                roll='メンバー'
                phase='基本設計～システムテスト'
                environment="NORTi(SH2A) / HEW" />
        </Stack>
      </Container>
    </>
  )
}
