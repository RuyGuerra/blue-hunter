USE [master]
GO
/****** Object:  Database [bluehunter]    Script Date: 29/11/2017 14:50:26 ******/
CREATE DATABASE [bluehunter] ON  PRIMARY 
( NAME = N'bluehunter', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL.1\MSSQL\DATA\bluehunter.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'bluehunter_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL.1\MSSQL\DATA\bluehunter_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [bluehunter] SET COMPATIBILITY_LEVEL = 90
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bluehunter].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bluehunter] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bluehunter] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bluehunter] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bluehunter] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bluehunter] SET ARITHABORT OFF 
GO
ALTER DATABASE [bluehunter] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bluehunter] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bluehunter] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bluehunter] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bluehunter] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bluehunter] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bluehunter] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bluehunter] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bluehunter] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bluehunter] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bluehunter] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bluehunter] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bluehunter] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bluehunter] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bluehunter] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bluehunter] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bluehunter] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [bluehunter] SET  MULTI_USER 
GO
ALTER DATABASE [bluehunter] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bluehunter] SET DB_CHAINING OFF 
GO
USE [bluehunter]
GO
/****** Object:  User [Ruy]    Script Date: 29/11/2017 14:50:26 ******/
CREATE USER [Ruy] FOR LOGIN [Ruy] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[books]    Script Date: 29/11/2017 14:50:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[books](
	[id] [int] NOT NULL,
	[title] [varchar](100) NULL,
	[author] [varchar](50) NULL,
	[yearPublished] [int] NULL,
	[price] [varchar](50) NULL,
	[rating] [varchar](50) NULL,
 CONSTRAINT [PK_books] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[users]    Script Date: 29/11/2017 14:50:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] NOT NULL,
	[fullName] [varchar](100) NULL,
	[gender] [varchar](50) NULL,
	[age] [int] NULL,
	[email] [varchar](50) NULL,
	[phone] [varchar](50) NULL,
	[username] [varchar](50) NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (0, N'Culpa 3 Enim Suscipit Voluptatem', N'@cNewman', 2015, N'$12.99', N'1.3/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (1, N'Quasi Excepturi Mollitia', N'@jNguyen', 2006, N'$15.99', N'4.5/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (2, N'Magnam Obcaecati Ab Asperiores A', N'@fMcGee', 2007, N'$20.99', N'4.1/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (4, N'Voluptate Cumque Qui Nihil', N'@mSparks', 2012, N'$8.99', N'1.6/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (5, N'Laboriosam', N'@eGuerrero', 2010, N'$8.99', N'4.8/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (7, N'Voluptatibus Iure', N'@tHolmes', 2003, N'$14.99', N'3.2/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (8, N'Aliquam Magnam Magni Voluptatem Dolore', N'@eThornton', 2016, N'$7.99', N'1.6/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (9, N'Architecto Non Quasi Sed Consequatur', N'@eKeller', 2016, N'$12.99', N'2/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (11, N'Perspiciatis Quisquam', N'@lHale', 2012, N'$11.99', N'4.6/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (12, N'Aperiam Iure', N'@mStanley', 2006, N'$9.99', N'2.1/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (13, N'Quibusdam Similique Eius Earum Repudiandae', N'@dLindsey', 2001, N'$9.99', N'5/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (14, N'Eaque Soluta', N'@kWillis', 2004, N'$10.99', N'2.7/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (15, N'Eveniet Tempora Doloremque Aliquam', N'@pDavidson', 2010, N'$15.99', N'4.5/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (16, N'Officia Ipsam Ea Soluta', N'@tBishop', 2008, N'$19.99', N'4.2/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (17, N'Ducimus Repellat Sequi Accusamus Unde', N'@mHunt', 2010, N'$3.99', N'1/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (18, N'Dicta Molestiae Perspiciatis Omnis Ducimus', N'@mPratt', 2002, N'$7.99', N'4.5/5')
INSERT [dbo].[books] ([id], [title], [author], [yearPublished], [price], [rating]) VALUES (19, N'Officiis Suscipit Quasi Sequi Error', N'@mLove', 2009, N'$12.99', N'2.9/5')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (0, N'Nina Ellis', N'female', 61, N'nEllis@example.com', N'(443) 545-8479', N'nEllis')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (2, N'Nathan Cobb', N'male', 39, N'nCobb@example.com', N'(368) 849-8721', N'nCobb')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (3, N'Nell Payne', N'female', 49, N'nPayne@example.com', N'(754) 297-3282', N'nPayne')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (4, N'Juan Douglas', N'male', 37, N'jDouglas@example.com', N'(950) 933-8532', N'jDouglas')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (5, N'Manuel Parker', N'male', 34, N'mParker@example.com', N'(754) 381-4273', N'mParker')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (6, N'Benjamin Day', N'male', 21, N'bDay@example.com', N'(360) 935-7443', N'bDay')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (7, N'Patrick Maldonado', N'male', 58, N'pMaldonado@example.com', N'(204) 601-5789', N'pMaldonado')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (9, N'Katherine Love', N'female', 46, N'kLove@example.com', N'(679) 945-7785', N'kLove')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (10, N'Travis Bowen', N'male', 60, N'tBowen@example.com', N'(528) 531-1611', N'tBowen')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (11, N'Samuel Hampton', N'male', 43, N'sHampton@example.com', N'(913) 298-8410', N'sHampton')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (13, N'Nicholas Ellis', N'male', 27, N'nEllis@example.com', N'(813) 229-1864', N'nEllis')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (14, N'Louise Lucas 2', N'female', 20, N'lLucas@example.com', N'(546) 345-1371', N'lLucas')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (15, N'Frances Perkins', N'female', 23, N'fPerkins@example.com', N'(214) 885-5742', N'fPerkins')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (16, N'Esther Castillo', N'female', 36, N'eCastillo@example.com', N'(541) 725-8912', N'eCastillo')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (17, N'Martha Gibson', N'female', 59, N'mGibson@example.com', N'(739) 705-4110', N'mGibson')
INSERT [dbo].[users] ([id], [fullName], [gender], [age], [email], [phone], [username]) VALUES (18, N'Ruby Harrington', N'female', 26, N'rHarrington@example.com', N'(883) 524-1126', N'rHarrington')
USE [master]
GO
ALTER DATABASE [bluehunter] SET  READ_WRITE 
GO
