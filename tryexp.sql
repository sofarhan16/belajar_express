--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Ubuntu 12.4-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.4 (Ubuntu 12.4-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: syh
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying,
    alamat text
);


ALTER TABLE public.users OWNER TO syh;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: syh
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO syh;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: syh
--

ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: syh
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: syh
--

COPY public.users (id, name, alamat) FROM stdin;
1	udin	gg.becekcuy
2	ucup	jln.kenangan
3	ucup	jln.kenangan
4	jajang	gg.sebelah
5	sutang	gg,buntung
6	aing	gg.sempit
7	baboon	jln.ancur
8	sendy	jln.bersamanya
9	kukang	jln.inajadulu
10	bubu	jln.tol
\.


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: syh
--

SELECT pg_catalog.setval('public.user_id_seq', 10, true);


--
-- PostgreSQL database dump complete
--

