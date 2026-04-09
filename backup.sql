--
-- PostgreSQL database dump
--

\restrict xoLEqjp4biLeCC6bYSlbaWUCtAyLfd3leta58ceCUNrMSCQNtGL0kJimcFi4rkw

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: barberos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.barberos (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.barberos OWNER TO postgres;

--
-- Name: barberos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.barberos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.barberos_id_seq OWNER TO postgres;

--
-- Name: barberos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.barberos_id_seq OWNED BY public.barberos.id;


--
-- Name: citas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.citas (
    id integer NOT NULL,
    fecha date NOT NULL,
    hora time without time zone NOT NULL,
    barbero character varying NOT NULL,
    servicio character varying NOT NULL
);


ALTER TABLE public.citas OWNER TO postgres;

--
-- Name: citas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.citas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.citas_id_seq OWNER TO postgres;

--
-- Name: citas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.citas_id_seq OWNED BY public.citas.id;


--
-- Name: reservas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservas (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    telefono character varying NOT NULL,
    email character varying NOT NULL,
    fecha date NOT NULL,
    hora time without time zone NOT NULL,
    barbero character varying NOT NULL,
    servicio character varying NOT NULL
);


ALTER TABLE public.reservas OWNER TO postgres;

--
-- Name: reservas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reservas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reservas_id_seq OWNER TO postgres;

--
-- Name: reservas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reservas_id_seq OWNED BY public.reservas.id;


--
-- Name: tipos_corte; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipos_corte (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.tipos_corte OWNER TO postgres;

--
-- Name: tipos_corte_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipos_corte_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tipos_corte_id_seq OWNER TO postgres;

--
-- Name: tipos_corte_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_corte_id_seq OWNED BY public.tipos_corte.id;


--
-- Name: barberos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barberos ALTER COLUMN id SET DEFAULT nextval('public.barberos_id_seq'::regclass);


--
-- Name: citas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas ALTER COLUMN id SET DEFAULT nextval('public.citas_id_seq'::regclass);


--
-- Name: reservas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservas ALTER COLUMN id SET DEFAULT nextval('public.reservas_id_seq'::regclass);


--
-- Name: tipos_corte id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos_corte ALTER COLUMN id SET DEFAULT nextval('public.tipos_corte_id_seq'::regclass);


--
-- Data for Name: barberos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.barberos (id, nombre) FROM stdin;
1	Milo
2	Chiki
3	Juan
\.


--
-- Data for Name: citas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.citas (id, fecha, hora, barbero, servicio) FROM stdin;
1	2026-04-03	09:00:00	Chiki	Corte + Barba + Afeitado
2	2026-04-03	09:00:00	Milo	Corte + Barba + Afeitado
3	2026-04-03	10:00:00	Milo	Barba
4	2026-04-03	09:00:00	Juan	Corte + Barba
5	2026-04-06	14:00:00	Juan	Corte Premium
6	2026-04-10	09:00:00	Juan	Barba
7	2026-04-09	09:00:00	Milo	Cejas
8	2026-04-09	09:00:00	Juan	Corte + Barba + Afeitado
\.


--
-- Data for Name: reservas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservas (id, nombre, telefono, email, fecha, hora, barbero, servicio) FROM stdin;
1	jaider quiroga	3153106567	jaidercacorro@gmail.com	2026-04-04	10:00:00	Juan	Corte + Barba + Afeitado
2	johann rojas	141423124132	johann@gmail.com	2026-04-04	10:00:00	Juan	Keratina
3	jaider quiroga	3153106567	sebas242229@gmail.com	2026-04-04	10:00:00	Juan	Corte Clasico
4	Sebastian	3153106567	sebas242229@gmail.com	2026-04-03	09:00:00	Chiki	Corte + Barba + Afeitado
5	Juan Esteban	11111111	miloj@gmail.com	2026-04-03	09:00:00	Milo	Corte + Barba + Afeitado
6	Pepito perez	4265342365	pepito@gmail.com	2026-04-06	14:00:00	Juan	Corte Premium
7	Jhon king	21232323	jonk@gmail.com	2026-04-10	09:00:00	Juan	Barba
8	Jhon king	21232323	jonk@gmail.com	2026-04-10	09:00:00	Juan	Barba
9	Milo 	43545454	milo@gmail.com	2026-04-09	09:00:00	Milo	Cejas
\.


--
-- Data for Name: tipos_corte; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipos_corte (id, nombre) FROM stdin;
1	Corte Clasico
2	Corte + Barba
3	Barba
4	Corte + Barba + Afeitado
5	Afeitado
6	Alisado
7	Keratina
8	Corte Premium
9	Cejas
\.


--
-- Name: barberos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.barberos_id_seq', 3, true);


--
-- Name: citas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.citas_id_seq', 8, true);


--
-- Name: reservas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reservas_id_seq', 9, true);


--
-- Name: tipos_corte_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_corte_id_seq', 9, true);


--
-- Name: barberos barberos_nombre_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barberos
    ADD CONSTRAINT barberos_nombre_key UNIQUE (nombre);


--
-- Name: barberos barberos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.barberos
    ADD CONSTRAINT barberos_pkey PRIMARY KEY (id);


--
-- Name: citas citas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id);


--
-- Name: reservas reservas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservas
    ADD CONSTRAINT reservas_pkey PRIMARY KEY (id);


--
-- Name: tipos_corte tipos_corte_nombre_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos_corte
    ADD CONSTRAINT tipos_corte_nombre_key UNIQUE (nombre);


--
-- Name: tipos_corte tipos_corte_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos_corte
    ADD CONSTRAINT tipos_corte_pkey PRIMARY KEY (id);


--
-- Name: ix_barberos_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_barberos_id ON public.barberos USING btree (id);


--
-- Name: ix_citas_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_citas_id ON public.citas USING btree (id);


--
-- Name: ix_reservas_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_reservas_id ON public.reservas USING btree (id);


--
-- Name: ix_tipos_corte_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX ix_tipos_corte_id ON public.tipos_corte USING btree (id);


--
-- PostgreSQL database dump complete
--

\unrestrict xoLEqjp4biLeCC6bYSlbaWUCtAyLfd3leta58ceCUNrMSCQNtGL0kJimcFi4rkw

